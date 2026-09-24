import { Component, inject } from '@angular/core';
import { POLICIES, POLICIES_UPDATED } from '../../data/policies.data';
import { Seo } from '../../shared/seo';

@Component({
    imports: [],
    selector: 'app-policies',
    styleUrl: './policies.css',
    templateUrl: './policies.html',
})
export class Policies
{
    protected readonly sections = POLICIES;
    protected readonly updated = POLICIES_UPDATED;

    constructor()
    {
        inject(Seo).apply({
            title: $localize`:@@policies.pageTitle:Políticas de vuelo | Magic Balloons`,
            description: $localize`:@@policies.description:Políticas de Magic Balloons: reservas, anticipo, formas de pago, cargo por peso, cambios, cancelaciones, clima y seguridad.`,
            // Trailing slash: static hosts serve politicas/index.html at /politicas/.
            path: 'politicas/'
        });
    }
}
