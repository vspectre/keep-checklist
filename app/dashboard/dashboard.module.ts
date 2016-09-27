import { NgModule }     from '@angular/core';
import { RouterModule } from '@angular/router';

import { SharedModule } from '../shared/shared.module';

import { DashboardComponent,
         BannerComponent }      from './';

@NgModule({
    imports: [
        RouterModule,
        SharedModule
    ],
    exports: [
        RouterModule,
        SharedModule,
        DashboardComponent,
        BannerComponent
    ],
    declarations: [
        DashboardComponent,
        BannerComponent
    ],
    providers: [],
})
export class DashboardModule { }