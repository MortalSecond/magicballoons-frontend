import { TestBed } from '@angular/core/testing';
import { DOCUMENT, LOCALE_ID } from '@angular/core';
import { Seo } from './seo';
import { SITE_URL } from '../data/site.data';

describe('Seo', () =>
{
    const page = { title: 'Título', description: 'Descripción' };

    function applyAs(locale: string, path?: string): Document
    {
        TestBed.configureTestingModule({ providers: [{ provide: LOCALE_ID, useValue: locale }] });
        TestBed.inject(Seo).apply({ ...page, path });

        return TestBed.inject(DOCUMENT);
    }

    function hrefOf(document: Document, selector: string): string | null
    {
        return document.head.querySelector(selector)?.getAttribute('href') ?? null;
    }

    function property(document: Document, name: string): string | null
    {
        return document.head.querySelector(`meta[property="${name}"]`)?.getAttribute('content') ?? null;
    }

    afterEach(() => document.head
        .querySelectorAll('link[rel="canonical"], link[rel="alternate"], meta[property], script[type="application/ld+json"]')
        .forEach(element => element.remove()));

    it('should point the Spanish build at the root', () =>
    {
        const document = applyAs('es-MX');

        expect(hrefOf(document, 'link[rel="canonical"]')).toBe(`${SITE_URL}/`);
        expect(document.title).toBe('Título');
        expect(document.head.querySelector('meta[name="description"]')?.getAttribute('content')).toBe('Descripción');
    });

    it('should point the English build at /en/', () =>
    {
        const document = applyAs('en');

        expect(hrefOf(document, 'link[rel="canonical"]')).toBe(`${SITE_URL}/en/`);
    });

    // Google ignores hreflang unless every language lists every other one.
    it('should list every language and a default, the same from both builds', () =>
    {
        const document = applyAs('en', 'politicas');

        expect(hrefOf(document, 'link[hreflang="es-MX"]')).toBe(`${SITE_URL}/politicas`);
        expect(hrefOf(document, 'link[hreflang="en"]')).toBe(`${SITE_URL}/en/politicas`);
        expect(hrefOf(document, 'link[hreflang="x-default"]')).toBe(`${SITE_URL}/politicas`);
    });

    // What WhatsApp and Facebook read to draw a link preview.
    it('should describe the page for link previews in its own language', () =>
    {
        const document = applyAs('en', 'politicas');

        expect(property(document, 'og:title')).toBe('Título');
        expect(property(document, 'og:url')).toBe(`${SITE_URL}/en/politicas`);
        expect(property(document, 'og:image')).toBe(`${SITE_URL}/media/og-cover.jpg`);
        expect(property(document, 'og:locale')).toBe('en_US');
        expect(property(document, 'og:locale:alternate')).toBe('es_MX');
    });

    it('should not duplicate tags when applied twice', () =>
    {
        const document = applyAs('es-MX');
        TestBed.inject(Seo).apply({ title: 'Otro', description: 'Otra' });

        expect(document.head.querySelectorAll('link[rel="canonical"]').length).toBe(1);
        expect(document.head.querySelectorAll('link[rel="alternate"]').length).toBe(3);
        expect(document.head.querySelectorAll('meta[property="og:title"]').length).toBe(1);
    });

    it('should write structured data that cannot close its own script tag', () =>
    {
        TestBed.inject(Seo).structuredData('test', { name: '</script><b>' });
        const script = TestBed.inject(DOCUMENT).head.querySelector('script[type="application/ld+json"]#test');

        expect(script?.textContent).not.toContain('</script>');
        expect(JSON.parse(script?.textContent ?? '{}').name).toBe('</script><b>');
    });
});
