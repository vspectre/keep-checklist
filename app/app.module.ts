import { NgModule }				from '@angular/core';
import { BrowserModule }		from '@angular/platform-browser';
import { Http, HttpModule }		from '@angular/http';

import { InMemoryWebApiModule }	from 'angular2-in-memory-web-api';

import { NoteModule }			from './notes/note.module';
import { SharedModule }			from './shared/shared.module';

import { AppComponent }			from './app.component';
import { appRouting,
		 appRoutingProviders }	from './app.routing';
import { InMemoryDataService }	from './in-memory-data.service';
import { NoteService }			from './notes/shared/note.service';
import { ChecklistService }		from './checklists/shared/checklist.service';

@NgModule({
	imports: [
		BrowserModule,
		HttpModule,
		InMemoryWebApiModule.forRoot(InMemoryDataService),
		appRouting,
		SharedModule
	],
	declarations: [ 
		AppComponent,
	],
	providers: [
		NoteService,
		ChecklistService,
		appRoutingProviders		
	],
	bootstrap: [ AppComponent ]
})
export class AppModule { }