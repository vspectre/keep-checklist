import { ModuleWithProviders }      from '@angular/core';
import { Routes, RouterModule }     from '@angular/router';

import { ErrorComponent }              from './error/error.component';

export const sharedRoutes: Routes = [
    { path: 'error', component: ErrorComponent }
]

export const sharedRoutingProviders: any[] = [
    
];

export const sharedRouting: ModuleWithProviders = RouterModule.forChild(sharedRoutes);