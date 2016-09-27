import { NgModule }				from '@angular/core';
import { BrowserModule }		from '@angular/platform-browser';
import { Http,
		 ConnectionBackend,
		 HttpModule }			from '@angular/http';

import { InMemoryWebApiModule }	from 'angular2-in-memory-web-api';

import { CoreModule }			from './core/core.module';

import { AppComponent }			from './app.component';
import { appRouting,
		 appRoutingProviders }	from './app.routing';
import { InMemoryDataService }	from './in-memory-data.service';

@NgModule({
	imports: [
		BrowserModule,
		InMemoryWebApiModule.forRoot(InMemoryDataService),
		appRouting,
		CoreModule
	],
	declarations: [ 
		AppComponent,
	],
	providers: [
		appRoutingProviders
	],
	bootstrap: [ AppComponent ]
})
export class AppModule { }