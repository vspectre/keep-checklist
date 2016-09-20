import { NgModule }     from '@angular/core';
import { FormsModule }  from '@angular/forms';
import { HttpModule }			from '@angular/http';


import { SharedModule }             from '../shared/shared.module';
import { NoteModule }               from '../notes/note.module';

import { ChecklistComponent }		from './checklist/checklist.component';
import { ChecklistItemComponent }	from './checklist-item/checklist-item.component';
import { ListBodyComponent }        from './list-body.component';

import { checklistRouting,
         checklistRoutingProviders }         from './checklist.routing';

@NgModule({
    imports: [
        FormsModule,
        HttpModule,
        SharedModule,
        //NoteModule,
        checklistRouting 
    ],
    declarations: [
        ChecklistComponent,
		ChecklistItemComponent,
        ListBodyComponent
    ],
    entryComponents: [
        ListBodyComponent
    ],
    exports: [
        FormsModule,
        HttpModule,
        SharedModule,
        //NoteModule
    ],
    providers: [
        checklistRoutingProviders
    ]
})
export class ChecklistModule { }