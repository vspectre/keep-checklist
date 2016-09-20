import { InMemoryDbService }     from 'angular2-in-memory-web-api';

export class InMemoryDataService implements InMemoryDataService {
    createDb() {
        let notes = [
            { id: 1, type: 'list', title: 'First Checklist', content: [
                    { id: 1, checked: false, description: 'Item 1' },
                    { id: 2, checked: true,  description: 'Item 2' },
                    { id: 3, checked: false, description: 'Item 3' },
                    { id: 4, checked: false, description: 'Item 4' }
                ]
            },
            { id: 2, type: 'list', title: 'Groceries List', content: [
                    { id: 1, checked: false, description: 'Bread' },
                    { id: 2, checked: true,  description: 'Milk' },
                    { id: 3, checked: true, description: 'Chicken' },
                    { id: 4, checked: true, description: 'Asparagus' },
                    { id: 5, checked: false, description: 'Paper Towels' },
                    { id: 6, checked: true,  description: 'Yogurt' },
                    { id: 7, checked: false, description: 'Mushrooms' },
                    { id: 8, checked: false, description: 'Steaks' },
                    { id: 9, checked: false, description: 'Cheddar' },
                    { id: 10, checked: true,  description: 'Rice' },
                    { id: 11, checked: false, description: 'Tomato Paste' },
                    { id: 12, checked: false, description: 'Juice' },
                ]
            },
            { id: 3, type: 'list', title: 'Note about Nothing', 
                content: 'Not much to put here'
            }
        ];

        return { notes };
    }
}