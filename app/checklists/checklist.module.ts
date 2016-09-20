import { NgModule }     from '@angular/core';
import { FormsModule }  from '@angular/forms';
import { HttpModule }			from '@angular/http';


import { SharedModule }             from '../shared/shared.module';
import { NoteModule }               from '../notes/note.module';

import { ChecklistsComponent }      from './checklists/checklists.component';
import { ChecklistComponent }		from './checklist/checklist.component';
import { ChecklistItemComponent }	from './checklist-item/checklist-item.component';
import { ListBodyComponent }        from './list-body.component';

import { checklistRouting,
         checklistRoutingProviders }         from './checklist.routing';
import { ChecklistService }			from './shared/checklist.service';

@NgModule({
    imports: [ 
        FormsModule,
        HttpModule,
        SharedModule,
        NoteModule,
        checklistRouting ],
    declarations: [
        ChecklistsComponent,
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
        //NoteModule,
        SharedModule
    ],
    providers: [
        checklistRoutingProviders
    ]
})
export class ChecklistModule { }