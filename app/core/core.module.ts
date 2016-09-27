import { NgModule }     from '@angular/core';
import { HttpModule }   from '@angular/http';
import { RouterModule } from '@angular/router';
import { InMemoryWebApiModule }	from 'angular2-in-memory-web-api';

import { SharedModule }			from '../shared/shared.module';
import { NoteModule }   from '../notes/note.module';

import { BannerComponent }   from './banner.component';
import { NoteService }			from '../notes/shared/note.service';
import { InMemoryDataService }	from '../in-memory-data.service';

@NgModule({
    imports: [
        HttpModule,
        InMemoryWebApiModule.forRoot(InMemoryDataService),
		RouterModule,
		SharedModule,
        NoteModule
    ],
    exports: [
        RouterModule,
        SharedModule,
        NoteModule,
        BannerComponent
    ],
    declarations: [
        BannerComponent
    ],
    providers: [
        NoteService,
    ],
})
export class CoreModule { }
