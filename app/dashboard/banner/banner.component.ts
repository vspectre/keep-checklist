import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'banner',
    templateUrl: 'banner.component.html',
    styleUrls: ['banner.component.css']
})
export class BannerComponent implements OnInit {
    @Input()title;
    @Input()showMenu: boolean;
    @Output()showMenuChange = new EventEmitter<boolean>();

    ngOnInit() { }

    toggleMenu() {
        this.showMenu = !this.showMenu;
        this.showMenuChange.emit(this.showMenu);
    }
}