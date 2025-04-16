import { Routes } from '@angular/router';
import { authGuard } from './shared/guard/auth.guard';

export const routes: Routes = [
    {
        path: 'sign-up',
        loadComponent: () =>
          import('./auth/pages/sign-up/sign-up.component').then(m => m.SignUpComponent)
      },
      {
        path: 'dashboard',
        canActivate: [authGuard],
        loadComponent: () =>
          import('./layout/panel-layout/panel-layout.component').then(m => m.PanelLayoutComponent),
        children: [
          {
            path: '',
            loadComponent: () =>
              import('./module/dashboard/dashboard.component').then(m => m.DashboardComponent),
          },
          {
            path: 'ebook-preview/:id',
            loadComponent: () =>
              import('./module/ebook-preview/ebook-preview.component').then(m => m.EbookPreviewComponent),
          },
        ],
      },
    {
        path: '',
        loadComponent: () =>
          import('./auth/pages/login/login.component').then(m => m.LoginComponent)
      }
];
