import { NgModule }         from '@angular/core';
import { FormsModule }      from '@angular/forms';
import { HttpModule }       from '@angular/http';

import { SharedModule }     from '../shared/shared.module';

import { NoteComponent,
         NoteBodyComponent,
         noteRoutes,
         noteRouting, 
         noteRoutingProviders }    from './';
import { NoteService }			from './shared/note.service';

@NgModule({
    imports: [
        FormsModule,
        HttpModule,
        SharedModule,
        //noteRouting,
    ],
    exports: [
        FormsModule,
        HttpModule,
        SharedModule,
    ],
    declarations: [
        NoteComponent,
        NoteBodyComponent
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