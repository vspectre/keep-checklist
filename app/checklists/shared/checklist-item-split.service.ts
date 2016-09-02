import { Injectable }   from '@angular/core';

import { Checklist }        from './checklist';
import { ChecklistItem }    from './checklist-item';
import { ChecklistItemService } from './checklist-item.service';
import { ChecklistService }     from './checklist.service';

@Injectable()
export class ChecklistItemSplitService implements ChecklistItemService {
    constructor(private checklistService: ChecklistService) { }

    delete(item: ChecklistItem): Promise<any> {
        return this.checklistService
            .getChecklist(0)
            .then(checklist => {
                for(var i = checklist.items.length -1; i >= 0; i--) {
                	if (checklist.items[i].id === item.id) {
                		checklist.items.splice(i, 1);
                	}
                }

                this.checklistService.save(checklist);
            })
            .catch(this.handleError);
    }
    
    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    }
}