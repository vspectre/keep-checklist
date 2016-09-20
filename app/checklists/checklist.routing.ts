import { ModuleWithProviders }      from '@angular/core';
import { Routes, RouterModule }     from '@angular/router';

import { NoteComponent,
          NoteResolve }            from '../notes';
import { ChecklistComponent }       from './checklist/checklist.component';
import { ChecklistsComponent }      from './checklists/checklists.component';
import { ListBodyComponent }        from './list-body.component';

const checklistRoutes: Routes = [
    { path: '', component: ChecklistsComponent },
    { path: ':id', component: ChecklistComponent, resolve: { checklist: NoteResolve } }
    ,{ path: 'list/:id',
      component: NoteComponent
      ,data: { contentType: ListBodyComponent }
      ,resolve: { note: NoteResolve }
    }
];

export const checklistRoutingProviders: any[] = [
    NoteResolve
];

export const checklistRouting: ModuleWithProviders = RouterModule.forChild(checklistRoutes);