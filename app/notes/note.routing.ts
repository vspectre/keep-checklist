import { ModuleWithProviders }      from '@angular/core';
import { Routes, RouterModule }     from '@angular/router';

import { NoteComponent,
         NoteBodyComponent,
         NoteResolve }              from './';

const noteRoutes: Routes = [
    { path: ':id', component: NoteComponent,
      data: { contentType: NoteBodyComponent }
    }
]

export const noteRoutingProviders: any[] = [
    //NoteResolve
];

export const noteRouting: ModuleWithProviders = RouterModule.forChild(noteRoutes);