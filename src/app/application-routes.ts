import {Routes} from "@angular/router";
import {LoginComponent} from "./user-section/authentication/login/login.component";
import {RegistrationComponent} from "./user-section/authentication/registration/registration.component";
import {StoreComponent} from "./pharmacy-section/store/store/store.component";
import {OrdersComponent} from "./pharmacy-section/orders/orders.component";
import {ProfileComponent} from "./user-section/profile/profile.component";


export const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'registration', component: RegistrationComponent},
  {path: 'store', component: StoreComponent},
  {path: 'my-orders', component: OrdersComponent},
  {path: 'profile', component: ProfileComponent},
  {path: '**', redirectTo: 'store'},
];
