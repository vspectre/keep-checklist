import { NgModule }         from '@angular/core';
import { CommonModule }     from '@angular/common';
import { FormsModule }      from '@angular/forms';
import { HttpModule }       from '@angular/http';

import { SharedModule }     from '../shared/shared.module';

import { NoteComponent,
         NoteBodyComponent,
         noteRouting, 
         noteRoutingProviders }    from './';
import { NoteService }			from './shared/note.service';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        HttpModule,
        SharedModule,
        noteRouting,
        
    ],
    exports: [
        CommonModule,
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
        NoteService
    ],
})
export class NoteModule { }