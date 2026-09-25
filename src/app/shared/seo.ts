import { DOCUMENT, Injectable, LOCALE_ID, inject } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { LANGUAGES, SITE_URL, languageFor } from '../data/site.data';

export interface PageSeo
{
    title: string;
    description: string;
    // Relative to the language root: '' for home, 'politicas/' and so on.
    path?: string;
    // For pages that must never appear in search, like the 404.
    noindex?: boolean;
}

// The preview shown when a link is shared on WhatsApp, Facebook and the like.
const SHARE_IMAGE = {
    url: `${SITE_URL}/media/og-cover.jpg`,
    width: '1200',
    height: '630'
};

// Open Graph wants underscores and a region.
const OG_LOCALES: Record<string, string> = { 'es-MX': 'es_MX', 'en': 'en_US' };

// Writes everything a page's <head> needs for search engines and link previews.
// Runs during prerendering, so every language build ships it in the HTML.
@Injectable({ providedIn: 'root' })
export class Seo
{
    private readonly title = inject(Title);
    private readonly meta = inject(Meta);
    private readonly document = inject(DOCUMENT);
    private readonly language = languageFor(inject(LOCALE_ID));

    apply(page: PageSeo): void
    {
        const path = page.path ?? '';
        const url = SITE_URL + this.language.path + path;

        this.title.setTitle(page.title);
        this.meta.updateTag({ name: 'description', content: page.description });

        // A page kept out of search has no canonical URL or alternates to claim.
        if (page.noindex)
        {
            this.meta.updateTag({ name: 'robots', content: 'noindex' });
            return;
        }

        this.link('canonical', url);

        for (const language of LANGUAGES)
            this.link('alternate', SITE_URL + language.path + path, language.hreflang);

        // Where to send searchers whose language has no build of its own.
        this.link('alternate', SITE_URL + LANGUAGES[0].path + path, 'x-default');

        this.property('og:type', 'website');
        this.property('og:site_name', 'Magic Balloons');
        this.property('og:title', page.title);
        this.property('og:description', page.description);
        this.property('og:url', url);
        this.property('og:image', SHARE_IMAGE.url);
        this.property('og:image:width', SHARE_IMAGE.width);
        this.property('og:image:height', SHARE_IMAGE.height);
        this.property('og:locale', OG_LOCALES[this.language.hreflang]);

        for (const language of LANGUAGES.filter(other => other !== this.language))
            this.property('og:locale:alternate', OG_LOCALES[language.hreflang]);

        this.meta.updateTag({ name: 'twitter:card', content: 'summary_large_image' });
    }

    // One JSON-LD block per id; calling again replaces it.
    structuredData(id: string, data: object): void
    {
        let script = this.document.head.querySelector<HTMLScriptElement>(`script[type="application/ld+json"][id="${id}"]`);

        if (!script)
        {
            script = this.document.createElement('script');
            script.type = 'application/ld+json';
            script.id = id;
            this.document.head.appendChild(script);
        }

        // Escaping < keeps any text in the data from closing the script tag.
        script.textContent = JSON.stringify(data).replace(/</g, '\\u003c');
    }


    // === HELPERS ===

    private property(property: string, content: string): void
    {
        this.meta.updateTag({ property, content }, `property="${property}"`);
    }

    private link(rel: string, href: string, hreflang?: string): void
    {
        const selector = hreflang ? `link[rel="${rel}"][hreflang="${hreflang}"]` : `link[rel="${rel}"]`;
        let element = this.document.head.querySelector<HTMLLinkElement>(selector);

        if (!element)
        {
            element = this.document.createElement('link');
            element.rel = rel;

            if (hreflang)
                element.hreflang = hreflang;

            this.document.head.appendChild(element);
        }

        element.href = href;
    }
}
