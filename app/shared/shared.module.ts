import { NgModule }                     from '@angular/core';
import { CommonModule }                 from '@angular/common';

import { FocusDirective }               from './focus.directive';
import { DynamicContentComponent }      from './dynamic-content.component';
import { ErrorComponent }               from './error/error.component';
import { sharedRoutes,
         sharedRouting,
         sharedRoutingProviders }       from './shared.routing';

@NgModule({
    imports: [
        CommonModule,
        sharedRouting
    ],
    declarations: [
        FocusDirective,
        DynamicContentComponent,
        ErrorComponent,
        
    ],
    exports: [
        CommonModule,
        FocusDirective,
        DynamicContentComponent,
        ErrorComponent
    ],
    providers: [
        sharedRoutingProviders
    ],
})
export class SharedModule { }
