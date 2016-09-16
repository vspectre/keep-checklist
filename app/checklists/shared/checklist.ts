import { Note }				from '../../notes';
import { ChecklistItem }	from './checklist-item';

export class Checklist extends Note {
	// get items(): ChecklistItem[] { return this.content; }
	// set items(items: ChecklistItem[]) {
	// 	this.content = items;
	// }

	constructor() {
		super();
		this.content = [];
	}
}