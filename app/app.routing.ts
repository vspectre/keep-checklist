import { ModuleWithProviders }      from '@angular/core';
import { Routes, RouterModule }     from '@angular/router';

import { AuthGuard }   from './shared/auth-guard.service';
import { AuthService } from './shared/auth.service';

import { NoteComponent }     from './notes/note.component';
import { NoteBodyComponent } from './notes/note-body.component';
import { NoteResolve }       from './notes/note-resolve.service';

const routes: Routes = [
    { path: '', redirectTo: 'checklists', pathMatch: 'full' },
    { path: 'note/:id', component: NoteComponent, resolve: { contentType: NoteResolve } },
    { path: 'list/:id', component: NoteComponent, resolve: { contentType: NoteResolve } },
    { path: 'checklists',
      loadChildren: 'app/checklists/checklist.module#ChecklistModule',
      canActivate: [AuthGuard] },
    { path: 'login', loadChildren: 'app/login/login.module#LoginModule' }
];

export const appRoutingProviders: any[] = [
    AuthGuard,
    AuthService,
    NoteResolve
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);