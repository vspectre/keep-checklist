import { ModuleWithProviders }      from '@angular/core';
import { Routes, RouterModule }     from '@angular/router';

import { AuthGuard }   from './shared/auth-guard.service';
import { AuthService } from './shared/auth.service';

const routes: Routes = [
    { path: 'login', loadChildren: 'app/login/login.module#LoginModule' },
    { path: '', redirectTo: 'checklists', pathMatch: 'full' },
    { path: 'checklists',
      loadChildren: 'app/checklists/checklist.module#ChecklistModule',
      canActivate: [AuthGuard] },
    { path: 'note', loadChildren: 'app/notes/note.module#NoteModule' },
    { path: 'list', redirectTo: 'checklists/list', pathMatch: 'prefix' }
];

export const appRoutingProviders: any[] = [
    AuthGuard,
    AuthService
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);