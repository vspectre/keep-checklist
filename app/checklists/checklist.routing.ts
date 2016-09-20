import { ModuleWithProviders }      from '@angular/core';
import { Routes, RouterModule }     from '@angular/router';

import { NoteComponent,
          NoteResolve }             from '../notes';
import { ChecklistComponent }       from './';

const checklistRoutes: Routes = [
    { path: ':id',
      component: NoteComponent,
      data: { contentType: ChecklistComponent },
      resolve: { note: NoteResolve }
    }
];

export const checklistRoutingProviders: any[] = [
    NoteResolve
];

export const checklistRouting: ModuleWithProviders = RouterModule.forChild(checklistRoutes);