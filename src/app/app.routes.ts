import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        title: $localize`:@@home.pageTitle:Magic Balloons | Vuelos en globo sobre Teotihuacán`,
        loadComponent: () => import('./pages/home/home').then(m => m.Home)
    },
    {
        // Same slug in every language, so the hreflang alternates line up.
        path: 'politicas',
        title: $localize`:@@policies.pageTitle:Políticas de vuelo | Magic Balloons`,
        loadComponent: () => import('./pages/policies/policies').then(m => m.Policies)
    }
];
