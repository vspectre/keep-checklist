import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent }       from './login.component';

import { AuthGuard }            from '../shared/auth-guard.service';
import { AuthService }          from '../shared/auth.service';

export const loginRoutes: Routes = [
  { path: 'login', component: LoginComponent },
];

export const authProviders: any[] = [
    AuthGuard,
    AuthService
];

//export const loginRouting: ModuleWithProviders = RouterModule.forChild(loginRoutes);