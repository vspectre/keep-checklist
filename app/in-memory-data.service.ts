import { CHECKLISTS }   from './mock-checklists';

export class InMemoryDataService {
    createDb() {
        let checklists = [
            { id: 0, name: 'First Checklist', items: [
                    { id: 1, checked: false, description: 'Item 1' },
                    { id: 2, checked: true,  description: 'Item 2' },
                    { id: 3, checked: false, description: 'Item 3' },
                    { id: 4, checked: false, description: 'Item 4' }
                ]
            }
        ];

        return { checklists };
    }
}