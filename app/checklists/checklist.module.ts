import { NgModule }     from '@angular/core';

import { SharedModule }             from '../shared/shared.module';
import { NoteModule }               from '../notes/note.module';

import { ChecklistComponent,
         ChecklistItemComponent }   from './';

import { checklistRouting,
         checklistRoutingProviders }         from './checklist.routing';

@NgModule({
    imports: [
        SharedModule,
        NoteModule,
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
        SharedModule,
        NoteModule
    ],
    providers: [
        checklistRoutingProviders
    ]
})
export class ChecklistModule { }