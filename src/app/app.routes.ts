import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        loadComponent: () => import('./pages/home/home').then(m => m.Home)
    },
    {
        // Same slug in every language, so the hreflang alternates line up.
        path: 'politicas',
        loadComponent: () => import('./pages/policies/policies').then(m => m.Policies)
    }
];
