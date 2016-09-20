import { ModuleWithProviders }      from '@angular/core';
import { Routes, RouterModule }     from '@angular/router';

import { NoteComponent,
          NoteResolve }            from '../notes';
import { ChecklistComponent }       from './checklist/checklist.component';
import { ListBodyComponent }        from './list-body.component';

const checklistRoutes: Routes = [
    { path: ':id',
      component: NoteComponent
      ,data: { contentType: ListBodyComponent }
      ,resolve: { note: NoteResolve }
    }
];

export const checklistRoutingProviders: any[] = [
    NoteResolve
];

export const checklistRouting: ModuleWithProviders = RouterModule.forChild(checklistRoutes);