import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        title: 'Magic Balloons | Vuelos en globo sobre Teotihuacán',
        loadComponent: () => import('./pages/home/home').then(m => m.Home)
    }
];
