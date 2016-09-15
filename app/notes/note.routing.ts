import { ModuleWithProviders }      from '@angular/core';
import { Routes, RouterModule }     from '@angular/router';

import { NoteComponent }            from './note.component';
import { NoteBodyComponent }        from './note-body.component';
import { NoteResolve }              from './note-resolve.service';
import { * }    from 'shared.module';

const routes: Routes = [
    { path: 'note/:id', component: NoteComponent, resolve: { contentType: NoteResolve } },
    { path: 'list/:id', component: NoteComponent, resolve: { contentType: NoteResolve } },
]

export const noteRoutingProviders: any[] = [
    NoteResolve
];

export const noteRouting: ModuleWithProviders = RouterModule.forChild(routes);