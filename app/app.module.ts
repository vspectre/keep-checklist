import { NgModule }				from '@angular/core';
import { BrowserModule }		from '@angular/platform-browser';

import { AppComponent }			from './app.component';


import { routing,
		 appRoutingProviders }	from './app.routing';
import { LoginComponent }		from './login/login.component';

@NgModule({
	imports: [
		BrowserModule,
		routing
	],
	declarations: [ 
		AppComponent,
		LoginComponent
	],
	providers: [
		appRoutingProviders
	],
	bootstrap: [ AppComponent ]
})
export class AppModule { }