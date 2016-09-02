import { Checklist }		from './checklists/';
import { ChecklistItem }	from './checklists/';

export const CHECKLISTS: Checklist[] = [
	{ id: 0, name: 'First Checklist', items: [
			{ id: 1, checked: false, description: 'Item 1' },
			{ id: 2, checked: true,  description: 'Item 2' },
			{ id: 3, checked: false, description: 'Item 3' },
			{ id: 4, checked: false, description: 'Item 4' }
		]
	}
];