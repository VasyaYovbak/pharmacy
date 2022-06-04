import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LoginComponent} from "./authentication/login/login.component";
import {RegistrationComponent} from "./authentication/registration/registration.component";
import {ReactiveFormsModule} from "@angular/forms";
import {RouterModule} from "@angular/router";


@NgModule({
  declarations: [
    LoginComponent,
    RegistrationComponent,],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule
  ],
  exports: [
    LoginComponent,
    RegistrationComponent,]
})
export class UserSectionModule {
}
