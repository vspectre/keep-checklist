import { ChecklistItem }	from './checklist-item';

export class Checklist {
	constructor(
		public id: number,
		public name: string,
		public items?: ChecklistItem[]
	) { }
}