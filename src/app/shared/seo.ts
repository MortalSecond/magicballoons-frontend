import { DOCUMENT, Injectable, LOCALE_ID, inject } from '@angular/core';
import { Meta } from '@angular/platform-browser';
import { LANGUAGES, SITE_URL, languageFor } from '../data/site.data';

// Writes a page's description, canonical URL and language alternates into the
// head. Runs during prerendering, so every language build ships them in HTML.
@Injectable({ providedIn: 'root' })
export class Seo
{
    private readonly meta = inject(Meta);
    private readonly document = inject(DOCUMENT);
    private readonly language = languageFor(inject(LOCALE_ID));

    // `path` is relative to the language root: '' for home, 'servicios/x' later.
    apply(description: string, path = ''): void
    {
        this.meta.updateTag({ name: 'description', content: description });
        this.link('canonical', SITE_URL + this.language.path + path);

        for (const language of LANGUAGES)
            this.link('alternate', SITE_URL + language.path + path, language.hreflang);

        // Where to send searchers whose language has no build of its own.
        this.link('alternate', SITE_URL + LANGUAGES[0].path + path, 'x-default');
    }


    // === HELPERS ===

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
