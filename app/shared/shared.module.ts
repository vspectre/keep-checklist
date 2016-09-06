import { NgModule } from '@angular/core';

// Imports for loading & configuring the in-memory web api
import { XHRBackend }			from '@angular/http';

import { InMemoryBackendService, SEED_DATA }	from 'angular2-in-memory-web-api';
import { InMemoryDataService } 	from './in-memory-data.service';


@NgModule({
    imports: [],
    declarations: [],
    providers: [
        { provide: XHRBackend, useClass: InMemoryBackendService },
		{ provide: SEED_DATA, useClass: InMemoryDataService },
    ],
})
export class SharedModule { }
