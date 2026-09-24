import { TestBed } from '@angular/core/testing';
import { DOCUMENT, LOCALE_ID } from '@angular/core';
import { Seo } from './seo';
import { SITE_URL } from '../data/site.data';

describe('Seo', () =>
{
    function applyAs(locale: string): Document
    {
        TestBed.configureTestingModule({ providers: [{ provide: LOCALE_ID, useValue: locale }] });
        TestBed.inject(Seo).apply('Descripción');

        return TestBed.inject(DOCUMENT);
    }

    function hrefOf(document: Document, selector: string): string | null
    {
        return document.head.querySelector(selector)?.getAttribute('href') ?? null;
    }

    afterEach(() => document.head.querySelectorAll('link[rel="canonical"], link[rel="alternate"]').forEach(link => link.remove()));

    it('should point the Spanish build at the root', () =>
    {
        const document = applyAs('es-MX');

        expect(hrefOf(document, 'link[rel="canonical"]')).toBe(`${SITE_URL}/`);
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
        const document = applyAs('en');

        expect(hrefOf(document, 'link[hreflang="es-MX"]')).toBe(`${SITE_URL}/`);
        expect(hrefOf(document, 'link[hreflang="en"]')).toBe(`${SITE_URL}/en/`);
        expect(hrefOf(document, 'link[hreflang="x-default"]')).toBe(`${SITE_URL}/`);
    });

    it('should not duplicate links when applied twice', () =>
    {
        const document = applyAs('es-MX');
        TestBed.inject(Seo).apply('Otra');

        expect(document.head.querySelectorAll('link[rel="canonical"]').length).toBe(1);
        expect(document.head.querySelectorAll('link[rel="alternate"]').length).toBe(3);
    });
});
