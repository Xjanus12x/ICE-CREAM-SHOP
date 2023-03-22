import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { OrderListComponent } from './order-list/order-list.component';
import { AddToCartComponent } from './add-to-cart/add-to-cart.component';
import { BuyNowComponent } from './buy-now/buy-now.component';
const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'order-list', component: OrderListComponent },
  { path: 'add-to-cart', component: AddToCartComponent },
  { path: 'buy-now', component: BuyNowComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
