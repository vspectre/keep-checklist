import { NgModule }     from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule }  from '@angular/forms';
import { HttpModule }			from '@angular/http';


import { SharedModule }             from '../shared/shared.module';
import { routing }                  from './checklist.routing';
import { ChecklistsComponent }      from './checklists/checklists.component';
import { ChecklistComponent }		from './checklist/checklist.component';
import { ChecklistItemComponent }	from './checklist-item/checklist-item.component';

import { ChecklistService }			from './shared/checklist.service';
import { ChecklistResolve }         from './shared/checklist-resolve.service';

@NgModule({
    imports: [ 
        CommonModule,
        FormsModule,
        HttpModule,
        SharedModule,
        routing ],
    declarations: [
        ChecklistsComponent,
        ChecklistComponent,
		ChecklistItemComponent,
    ],
    exports: [
        CommonModule,
        FormsModule,
        HttpModule
    ],
    providers: [
        ChecklistService,
        ChecklistResolve
    ]
})
export class ChecklistModule { }