import { NgModule }				from '@angular/core';
import { BrowserModule }		from '@angular/platform-browser';
import { FormsModule }			from '@angular/forms';

import { AppComponent }			from './app.component';
import { ChecklistComponent }	from './checklist.component';

@NgModule({
	imports: [
		BrowserModule,
		FormsModule
	],
	declarations: [ 
		AppComponent,
		ChecklistComponent
	],
	bootstrap: [ AppComponent ]

})
export class AppModule { }