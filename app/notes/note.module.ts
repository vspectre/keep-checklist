import { NgModule }         from '@angular/core';
import { CommonModule }     from '@angular/common';
import { FormsModule }      from '@angular/forms';

import { SharedModule }     from '../shared/shared.module';
import { NoteComponent }    from './note.component';
import { NoteBodyComponent } from './note-body.component';
import { ListBodyComponent } from './list-body.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        SharedModule
    ],
    exports: [
        
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
    providers: [],
})
export class NoteModule { }