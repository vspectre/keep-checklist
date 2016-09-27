import { Component, OnInit } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'dashboard',
    templateUrl: 'dashboard.component.html',
    styleUrls: [ 'dashboard.component.css' ]
})
export class DashboardComponent {
    title: string = 'Ng2 Keep';
    asideSelector = '.side-bar';
    showMenu: boolean;

    menuClasses() {
        let classes = {
            hidden: !this.showMenu,
            'col-xs-3': this.showMenu 
        }

        return classes;
    }

    contentClasses() {
        return 'col-xs-' + (this.showMenu ? '9' : '12');
    }
}