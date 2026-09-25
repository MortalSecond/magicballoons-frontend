import { Component, inject } from '@angular/core';
import { CONTACT } from '../../data/contact.data';
import { whatsappUrl } from '../../data/services.data';
import { Seo } from '../../shared/seo';

// Served by Cloudflare, with a 404 status, for any URL that does not exist.
// scripts/copy-404.mjs copies the prerendered page to the 404.html it looks for.
@Component({
    imports: [],
    selector: 'app-not-found',
    styleUrl: './not-found.css',
    templateUrl: './not-found.html',
})
export class NotFound
{
    protected readonly contact = CONTACT;
    protected readonly whatsappUrl = whatsappUrl(CONTACT.whatsapp, $localize`:@@notFound.whatsappMessage:Hola, busco información sobre los vuelos en globo.`);

    constructor()
    {
        inject(Seo).apply({
            title: $localize`:@@notFound.pageTitle:Página no encontrada | Magic Balloons`,
            description: $localize`:@@notFound.description:Esta página no existe. Vuelos en globo sobre Teotihuacán con Magic Balloons.`,
            noindex: true
        });
    }
}
