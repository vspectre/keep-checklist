import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { loginRouting,
         authProviders }     from './login.routing';
import { LoginComponent }   from './login.component';

@NgModule({
    imports: [
        loginRouting,
        CommonModule
    ],
    exports: [
        CommonModule
    ],
    declarations: [ LoginComponent ],
    providers: [
        authProviders
    ],
})
export class LoginModule { }
