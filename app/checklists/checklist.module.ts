import { NgModule }     from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule }  from '@angular/forms';
import { HttpModule }			from '@angular/http';


import { SharedModule }             from '../shared/shared.module';
import { NoteModule }               from '../notes/note.module';

import { ChecklistsComponent }      from './checklists/checklists.component';
import { ChecklistComponent }		from './checklist/checklist.component';
import { ChecklistItemComponent }	from './checklist-item/checklist-item.component';
import { ListBodyComponent }        from './list-body.component';

import { routing,
         routingProviders }         from './checklist.routing';
import { ChecklistService }			from './shared/checklist.service';

@NgModule({
    imports: [ 
        CommonModule,
        FormsModule,
        HttpModule,
        SharedModule,
        NoteModule,
        routing ],
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
        CommonModule,
        FormsModule,
        HttpModule,
        NoteModule,
        SharedModule
    ],
    providers: [
        ChecklistService,
        routingProviders
    ]
})
export class ChecklistModule { }