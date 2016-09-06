import { ModuleWithProviders }      from '@angular/core';
import { Routes, RouterModule }     from '@angular/router';


export const routes: Routes = [
    { path: '', redirectTo: 'checklists', pathMatch: 'full' },
    { path: 'checklists', loadChildren: 'app/checklists/checklist.module#ChecklistModule' }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);