import { Component, DestroyRef, LOCALE_ID, afterNextRender, inject, signal } from '@angular/core';
import { CONTACT } from '../../../data/contact.data';
import { LANGUAGES, SECTION_LINKS, languageFor } from '../../../data/site.data';

@Component({
    imports: [],
    selector: 'app-navbar',
    styleUrl: './navbar.css',
    templateUrl: './navbar.html',
})
export class Navbar
{
    protected readonly contact = CONTACT;
    protected readonly links = SECTION_LINKS;
    protected readonly openLabel = $localize`:@@navbar.open:Abrir menú`;
    protected readonly closeLabel = $localize`:@@navbar.close:Cerrar menú`;

    // Plain links to each language's root: a language is a separate build, so
    // switching is a page load by design.
    private readonly current = languageFor(inject(LOCALE_ID));
    protected readonly languages = LANGUAGES.map(language => ({ ...language, isCurrent: language === this.current }));

    // === STATE ===

    protected readonly isScrolled = signal(false);
    protected readonly isOpen = signal(false);

    constructor()
    {
        const destroyRef = inject(DestroyRef);

        // window only exists in the browser, never while prerendering.
        afterNextRender(() =>
        {
            // Setting the same boolean again notifies nothing, so this only
            // re-renders when the threshold is actually crossed.
            const onScroll = () => this.isScrolled.set(window.scrollY > 40);

            onScroll();
            window.addEventListener('scroll', onScroll, { passive: true });
            destroyRef.onDestroy(() => window.removeEventListener('scroll', onScroll));
        });
    }

    // === METHODS ===

    protected toggle(): void
    {
        this.isOpen.set(!this.isOpen());
    }

    protected close(): void
    {
        this.isOpen.set(false);
    }
}
