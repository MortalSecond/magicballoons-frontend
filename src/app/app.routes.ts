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
    },
    {
        // Prerendered, then copied to 404.html for Cloudflare (scripts/copy-404.mjs).
        path: '404',
        loadComponent: () => import('./pages/not-found/not-found').then(m => m.NotFound)
    },
    {
        // Any other URL: Cloudflare serves the 404.html above, and once the app
        // starts, the router has to agree with it rather than render nothing.
        path: '**',
        loadComponent: () => import('./pages/not-found/not-found').then(m => m.NotFound)
    }
];
