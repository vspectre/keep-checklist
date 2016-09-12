import { ModuleWithProviders }      from '@angular/core';
import { Routes, RouterModule }     from '@angular/router';

import { AuthGuard }                from './shared/auth-guard.service';

import { loginRoutes, authProviders }   from './login/login.routing';

const routes: Routes = [
    { path: '', redirectTo: 'checklists', pathMatch: 'full' },
    { path: 'checklists',
      loadChildren: 'app/checklists/checklist.module#ChecklistModule',
      canActivate: [AuthGuard] },
    ...loginRoutes
];

export const appRoutingProviders: any[] = [
    authProviders
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);