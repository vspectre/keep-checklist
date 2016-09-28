import { Component, OnInit } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'keep-menu',
    templateUrl: 'menu.component.html',
    styleUrls: ['menu.component.css']
})
export class MenuComponent implements OnInit {
    items = [];

    constructor() { }

    ngOnInit() { 
        this.items = MenuItems;
    }

    itemClasses(imgClass: string) {
        return [ 'glyphicon', 'glyphicon-' + imgClass ];
    }
}

const MenuItems = [
    { text: 'Notes', route: '/note', img: 'pencil' },
    { text: 'Lists', route: '/list', img: 'th-list' },
    { text: 'Settings', route: '/settings', img: 'cog' },
]