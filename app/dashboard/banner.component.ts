import { Component, Input, OnInit } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'banner',
    templateUrl: 'banner.component.html',
    styleUrls: ['banner.component.css']
})
export class BannerComponent implements OnInit {
    @Input()title;
    
    constructor() { }

    ngOnInit() { }
}