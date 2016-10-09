import { NgModule }     from '@angular/core';
import { RouterModule } from '@angular/router';

import { SharedModule } from '../shared/shared.module';

import { DashboardComponent,
         BannerComponent,
         MenuComponent,
         MenuService }      from './';

@NgModule({
    imports: [
        RouterModule,
        SharedModule
    ],
    exports: [
        RouterModule,
        SharedModule,
        DashboardComponent,
        BannerComponent,
        MenuComponent
    ],
    declarations: [
        DashboardComponent,
        BannerComponent,
        MenuComponent
    ],
    providers: [
        MenuService
    ],
})
export class DashboardModule { }