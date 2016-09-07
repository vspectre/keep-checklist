import { ModuleWithProviders }      from '@angular/core';
import { Routes, RouterModule }     from '@angular/router';

import { ChecklistComponent }       from './checklist/checklist.component';
import { ChecklistsComponent }      from './checklists/checklists.component';

const routes: Routes = [
    { path: '', component: ChecklistsComponent },
    { path: ':id', component: ChecklistComponent }
];
export const routing: ModuleWithProviders = RouterModule.forChild(routes);