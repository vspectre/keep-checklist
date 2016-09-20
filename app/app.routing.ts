import { ModuleWithProviders }      from '@angular/core';
import { Routes, RouterModule }     from '@angular/router';

import { AuthGuard }   from './shared/auth-guard.service';
import { AuthService } from './shared/auth.service';

import { noteRoutes }  from './notes/note.routing';

const routes: Routes = [
    { path: '', redirectTo: 'note', pathMatch: 'full' },
    { path: 'login', loadChildren: 'app/login/login.module#LoginModule' },
    // { path: 'note', loadChildren: 'app/notes/note.module#NoteModule' },
    { path: 'note', children: noteRoutes, canActivate: [AuthGuard] },
    { path: 'list', loadChildren: 'app/checklists/checklist.module#ChecklistModule', canActivate: [AuthGuard] },
    { path: '**', redirectTo: 'error', pathMatch: 'full' }
];

export const appRoutingProviders: any[] = [
    AuthGuard,
    AuthService
];

export const appRouting: ModuleWithProviders = RouterModule.forRoot(routes);