import { NgModule }         from '@angular/core';
import { CommonModule }     from '@angular/common';
import { FormsModule }      from '@angular/forms';

import { SharedModule }     from '../shared/shared.module';

import { NoteComponent }    from './note.component';
import { NoteBodyComponent } from './note-body.component';
import { ListBodyComponent } from './list-body.component';
import { noteRouting, 
         noteRoutingProviders }    from './note.routing';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        SharedModule,
        noteRouting
    ],
    exports: [
        CommonModule,
        FormsModule,
        SharedModule
    ],
    declarations: [
        NoteComponent,
        NoteBodyComponent,
        ListBodyComponent
    ],
    entryComponents: [
        NoteBodyComponent,
        ListBodyComponent
    ],
    providers: [
        noteRoutingProviders
    ],
})
export class NoteModule { }