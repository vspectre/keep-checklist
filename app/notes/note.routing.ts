import { ModuleWithProviders }      from '@angular/core';
import { Routes, RouterModule }     from '@angular/router';

import { NoteComponent,
         NoteBodyComponent,
         NoteResolve }              from './';

const routes: Routes = [
    { path: ':id',
      component: NoteComponent, 
      resolve: { note: NoteResolve },
      data: { contentType: NoteBodyComponent }
    },
]

export const noteRoutingProviders: any[] = [
    NoteResolve
];

export const noteRouting: ModuleWithProviders = RouterModule.forChild(routes);