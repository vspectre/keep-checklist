import { ChecklistItem }	from './checklist-item';

export class Checklist {
	id: number;
	name: string;
	items: ChecklistItem[];
	
	constructor() {
		this.items = [];
	}
}