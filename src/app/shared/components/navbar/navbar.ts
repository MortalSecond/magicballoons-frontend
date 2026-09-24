import { Component, DestroyRef, afterNextRender, inject, signal } from '@angular/core';
import { CONTACT } from '../../../data/contact.data';

@Component({
    imports: [],
    selector: 'app-navbar',
    styleUrl: './navbar.css',
    templateUrl: './navbar.html',
})
export class Navbar
{
    protected readonly contact = CONTACT;
    protected readonly links = [
        { href: '/#vuelos', label: 'Vuelos' },
        { href: '/#servicios', label: 'Servicios' },
        { href: '/#experiencia', label: 'Tu día' }
    ];

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
