import { Component, Input, OnInit } from '@angular/core';

import { NoteBody,
         NoteComponent }            from '../';

@Component({
    moduleId: module.id,
    selector: 'note-body',
    templateUrl: 'note-body.component.html',
    styleUrls: [ 'note-body.component.css' ],
    host: {
        'class': 'host_class'
    }
})
export class NoteBodyComponent extends NoteBody {
    host_class: string;

    constructor(parent: NoteComponent) {
        super(parent);

        this.host_class = 'panel-body';
    }
}