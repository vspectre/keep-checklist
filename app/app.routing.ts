import { ModuleWithProviders }      from '@angular/core';
import { Routes, RouterModule }     from '@angular/router';

import { AuthGuard }   from './shared/auth-guard.service';
import { AuthService } from './shared/auth.service';

import { noteRoutes }  from './notes/note.routing';

const routes: Routes = [
    { path: '', redirectTo: 'checklists', pathMatch: 'full' },
    { path: 'checklists',
      loadChildren: 'app/checklists/checklist.module#ChecklistModule',
      canActivate: [AuthGuard] },
    { path: 'login', loadChildren: 'app/login/login.module#LoginModule' },
    // { path: 'note', loadChildren: 'app/notes/note.module#NoteModule' },
    { path: 'note', children: noteRoutes },
    { path: 'list', redirectTo: 'checklists/list', pathMatch: 'prefix' },
    { path: '**', redirectTo: 'error', pathMatch: 'full' }
];

export const appRoutingProviders: any[] = [
    AuthGuard,
    AuthService
];

export const appRouting: ModuleWithProviders = RouterModule.forRoot(routes);