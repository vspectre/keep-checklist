import { NgModule }				from '@angular/core';
import { BrowserModule }		from '@angular/platform-browser';
import { FormsModule }			from '@angular/forms';
import { HttpModule }			from '@angular/http';

// Imports for loading & configuring the in-memory web api
import { XHRBackend }			from '@angular/http';

import { InMemoryBackendService, SEED_DATA }	from 'angular2-in-memory-web-api';
import { InMemoryDataService } 	from './in-memory-data.service';

import { AppComponent }				from './app.component';
import { ChecklistComponent }		from './checklist.component';
import { ChecklistItemComponent }	from './checklist-item.component';

import { ChecklistService }		from './checklist.service';

@NgModule({
	imports: [
		BrowserModule,
		FormsModule,
		HttpModule
	],
	declarations: [ 
		AppComponent,
		ChecklistComponent,
		ChecklistItemComponent
	],
	providers: [
		ChecklistService,
		{ provide: XHRBackend, useClass: InMemoryBackendService },
		{ provide: SEED_DATA, useClass: InMemoryDataService },
	],
	bootstrap: [ AppComponent ]
})
export class AppModule { }