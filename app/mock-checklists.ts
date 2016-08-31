import { Checklist }		from './checklist';
import { ChecklistItem }	from './checklist-item';

export const CHECKLISTS: Checklist[] = [
	{ id: 0, name: 'First Checklist', items: [
			{ id: 1, checked: false, description: 'Item 1' },
			{ id: 2, checked: true,  description: 'Item 2' },
			{ id: 3, checked: false, description: 'Item 3' },
			{ id: 4, checked: false, description: 'Item 4' }
		]
	}
];