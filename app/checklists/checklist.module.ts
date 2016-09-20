import { NgModule }     from '@angular/core';
import { FormsModule }  from '@angular/forms';
import { HttpModule }			from '@angular/http';


import { SharedModule }             from '../shared/shared.module';
import { NoteModule }               from '../notes/note.module';

import { ChecklistComponent,
         ChecklistItemComponent }   from './';

import { checklistRouting,
         checklistRoutingProviders }         from './checklist.routing';

@NgModule({
    imports: [
        FormsModule,
        HttpModule,
        SharedModule,
        checklistRouting 
    ],
    declarations: [
        ChecklistComponent,
		ChecklistItemComponent
    ],
    entryComponents: [
        ChecklistComponent
    ],
    exports: [
        FormsModule,
        HttpModule,
        SharedModule,
    ],
    providers: [
        checklistRoutingProviders
    ]
})
export class ChecklistModule { }