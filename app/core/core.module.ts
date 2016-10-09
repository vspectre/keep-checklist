import { NgModule, Optional, SkipSelf }   from '@angular/core';
import { HttpModule }           from '@angular/http';
import { RouterModule }         from '@angular/router';
import { InMemoryWebApiModule }	from 'angular-in-memory-web-api';

import { SharedModule }			from '../shared/shared.module';
import { NoteModule }           from '../notes/note.module';
import { DashboardModule }      from '../dashboard/dashboard.module';

import { NoteService }			from '../notes/shared/note.service';
import { InMemoryDataService }	from './in-memory-data.service';

@NgModule({
    imports: [
        HttpModule,
        InMemoryWebApiModule.forRoot(InMemoryDataService),
		RouterModule,
		SharedModule,
        NoteModule,
        DashboardModule,
    ],
    exports: [
        RouterModule,
        SharedModule,
        NoteModule,
        DashboardModule,
    ],
    declarations: [
    ],
    providers: [
        NoteService,
    ],
})
export class CoreModule {
    constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
        if (parentModule) {
            throw new Error('CoreModule is already loaded. Import it in the AppModule only');
        }
    }
}
