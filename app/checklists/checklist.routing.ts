import { ModuleWithProviders }      from '@angular/core';
import { Routes, RouterModule }     from '@angular/router';

import { ChecklistsComponent }      from './checklists/checklists.component';

const routes: Routes = [
    { path: '',
      component: ChecklistsComponent }
];
export const routing: ModuleWithProviders = RouterModule.forChild(routes);