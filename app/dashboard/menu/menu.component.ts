import { Component, OnInit }    from '@angular/core';

import { MenuService }          from '../menu.service';

@Component({
    moduleId: module.id,
    selector: 'keep-menu',
    templateUrl: 'menu.component.html',
    styleUrls: ['menu.component.css']
})
export class MenuComponent implements OnInit {
    items = [];

    constructor(private menuService: MenuService) { }

    ngOnInit() { 
        this.items = this.menuService.getItems();
    }

    itemClasses(imgClass: string) {
        return [ 'glyphicon', 'glyphicon-' + imgClass ];
    }
}