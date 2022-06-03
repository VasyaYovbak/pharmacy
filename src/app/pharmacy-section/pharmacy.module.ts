import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {OrdersComponent} from "./orders/orders.component";
import {StoreComponent} from "./store/store/store.component";


@NgModule({
  declarations: [
    OrdersComponent,
    StoreComponent],
  imports: [
    CommonModule
  ],
  exports: [
    OrdersComponent,
    StoreComponent]
})
export class PharmacyModule {
}
