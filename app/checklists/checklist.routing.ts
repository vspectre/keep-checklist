import { ModuleWithProviders }      from '@angular/core';
import { Routes, RouterModule }     from '@angular/router';

import { ChecklistComponent }       from './checklist/checklist.component';
import { ChecklistsComponent }      from './checklists/checklists.component';
import { ChecklistResolve }         from './shared';

const routes: Routes = [
    { path: '', component: ChecklistsComponent },
    { path: ':id', component: ChecklistComponent, resolve: { checklist: ChecklistResolve } }
];
export const routing: ModuleWithProviders = RouterModule.forChild(routes);