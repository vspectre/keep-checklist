import { NgModule, ElementRef }     from '@angular/core';
import { FormsModule }  from '@angular/forms';
import { HttpModule }			from '@angular/http';


import { SharedModule }             from '../shared/shared.module';
import { NoteModule }               from '../notes/note.module';

import { ChecklistComponent,
         ChecklistItemComponent,
         InputWrapDirective,
         checklistRouting,
         checklistRoutingProviders }   from './';


@NgModule({
    imports: [
        FormsModule,
        HttpModule,
        SharedModule,
        checklistRouting 
    ],
    declarations: [
        ChecklistComponent,
		ChecklistItemComponent,
        InputWrapDirective
    ],
    entryComponents: [
        ChecklistComponent
    ],
    exports: [
        FormsModule,
        HttpModule,
        SharedModule,
        InputWrapDirective
    ],
    providers: [
        checklistRoutingProviders,
    ]
})
export class ChecklistModule { }