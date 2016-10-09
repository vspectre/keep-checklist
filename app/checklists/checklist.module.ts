import { NgModule }     from '@angular/core';

import { SharedModule }             from '../shared/shared.module';
import { NoteModule }               from '../notes/note.module';

import { ChecklistComponent,
         ChecklistItemComponent,
         InputWrapDirective,
         checklistRouting,
         checklistRoutingProviders }   from './';


@NgModule({
    imports: [
        SharedModule,
        NoteModule,
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
        SharedModule,
        NoteModule,
        InputWrapDirective
    ],
    providers: [
        checklistRoutingProviders,
    ]
})
export class ChecklistModule { }