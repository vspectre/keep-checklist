import { Injectable }       from '@angular/core';

import { ChecklistItem }    from './checklist-item';

@Injectable()
export abstract class ChecklistItemService {
    abstract delete(item: ChecklistItem): Promise<any>;
}