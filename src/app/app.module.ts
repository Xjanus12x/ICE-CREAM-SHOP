import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HomeComponent } from "./home/home.component";
import { NavbarComponent } from "./navbar/navbar.component";
import { OrderListComponent } from "./order-list/order-list.component";
import { FooterComponent } from "./footer/footer.component";
import { AddToCartComponent } from "./add-to-cart/add-to-cart.component";
import { BuyNowComponent } from "./buy-now/buy-now.component";
import { CartListComponent } from './cart-list/cart-list.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    OrderListComponent,
    FooterComponent,
    AddToCartComponent,
    BuyNowComponent,
    CartListComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
