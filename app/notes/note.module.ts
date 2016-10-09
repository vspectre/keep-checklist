import { NgModule }         from '@angular/core';

import { SharedModule }     from '../shared/shared.module';

import { NotesComponent,
         NoteComponent,
         NoteBodyComponent,
         noteRoutes,
         noteRouting, 
         noteRoutingProviders }    from './';
import { NoteService }			from './shared/note.service';

@NgModule({
    imports: [
        SharedModule,
        //noteRouting,
    ],
    exports: [
        SharedModule,
    ],
    declarations: [
        NoteComponent,
        NoteBodyComponent,
        NotesComponent
    ],
    entryComponents: [
        NoteBodyComponent
    ],
    providers: [
        noteRoutingProviders,
        //NoteService
    ],
})
export class NoteModule { }