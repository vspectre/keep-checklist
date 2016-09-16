import { NgModule }				from '@angular/core';
import { BrowserModule }		from '@angular/platform-browser';
import { InMemoryWebApiModule }	from 'angular2-in-memory-web-api';

import { NoteModule }			from './notes/note.module';
import { SharedModule }			from './shared/shared.module';

import { AppComponent }			from './app.component';
import { routing,
		 appRoutingProviders }	from './app.routing';

@NgModule({
	imports: [
		BrowserModule,
		NoteModule,
		routing,
	],
	declarations: [ 
		AppComponent
	],
	providers: [
		appRoutingProviders
	],
	bootstrap: [ AppComponent ]
})
export class AppModule { }