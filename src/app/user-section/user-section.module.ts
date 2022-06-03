import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LoginComponent} from "./authentication/login/login.component";
import {RegistrationComponent} from "./authentication/registration/registration.component";


@NgModule({
  declarations: [
    LoginComponent,
    RegistrationComponent,],
  imports: [
    CommonModule
  ],
  exports: [
    LoginComponent,
    RegistrationComponent,]
})
export class UserSectionModule {
}
