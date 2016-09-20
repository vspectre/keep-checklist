import { ModuleWithProviders }      from '@angular/core';
import { Routes, RouterModule }     from '@angular/router';

import { NotesComponent,
         NoteComponent,
         NoteBodyComponent,
         NoteResolve }              from './';

export const noteRoutes: Routes = [
    { path: '', component: NotesComponent },
    { path: ':id', component: NoteComponent,
      data: { contentType: NoteBodyComponent },
      resolve: { note: NoteResolve }
    }
]

export const noteRoutingProviders: any[] = [
    NoteResolve
];

export const noteRouting: ModuleWithProviders = RouterModule.forChild(noteRoutes);