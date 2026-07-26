import { Routes } from '@angular/router';


export const routes: Routes = [
    {
        path: '',
        redirectTo: '/pilots',
        pathMatch: 'full'
    },
    {
        path: 'pilots',
        loadComponent: () => import('./Screens/pilots/pilots').then(m => m.Pilots)
    },
    {
        path: 'ranking',
        loadComponent: () => import('./Screens/pilots/pilots').then(m => m.Pilots)
    },
    {
        path: 'profile',
        loadComponent: () => import('./Screens/profile/profile').then(m => m.Profile)
    },
];
