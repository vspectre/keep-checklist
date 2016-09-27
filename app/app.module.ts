import { NgModule }				from '@angular/core';
import { BrowserModule }		from '@angular/platform-browser';

import { CoreModule }			from './core/core.module';

import { AppComponent }			from './app.component';
import { appRouting,
		 appRoutingProviders }	from './app.routing';

@NgModule({
	imports: [
		BrowserModule,
		CoreModule,
		appRouting
	],
	declarations: [ AppComponent ],
	providers: [
		appRoutingProviders
	],
	bootstrap: [ AppComponent ]
})
export class AppModule { }