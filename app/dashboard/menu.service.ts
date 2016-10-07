import { Injectable }   from '@angular/core';

import { MenuItem }     from './menu-item'; 

@Injectable()
export class MenuService {
    items: MenuItem[];
    
    constructor() {
        this.items = MenuItems;
    }

    getItems() {
        return this.items;
    }
}

const MenuItems = [
    { text: 'Notes', route: '/note', glyphName: 'pencil' },
    { text: 'Lists', route: '/list', glyphName: 'th-list' },
    { text: 'Settings', route: '/settings', glyphName: 'cog' },
]