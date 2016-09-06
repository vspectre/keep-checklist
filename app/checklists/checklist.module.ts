import { NgModule }     from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule }  from '@angular/forms';
import { HttpModule }			from '@angular/http';


import { SharedModule }             from '../shared/shared.module';
import { routing }                  from './checklist.routing';
import { ChecklistsComponent }      from './checklists/checklists.component';
import { ChecklistComponent }		from './checklist/checklist.component';
import { ChecklistItemsComponent }	from './checklist-items/checklist-items.component';
import { ChecklistItemComponent }	from './checklist-item/checklist-item.component';

import { ChecklistService }			from './shared/checklist.service';
import { ChecklistItemService }		from './shared/checklist-item.service';
import { ChecklistItemApiService }	from './shared/checklist-item-api.service';
import { ChecklistItemSplitService } from './shared/checklist-item-split.service';

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
		ChecklistItemsComponent,
		ChecklistItemComponent,
    ],
    exports: [
        CommonModule,
        FormsModule,
        HttpModule
    ],
    providers: [
        ChecklistService,
		{ provide: ChecklistItemService, useClass: ChecklistItemSplitService },
    ]
})
export class ChecklistModule { }