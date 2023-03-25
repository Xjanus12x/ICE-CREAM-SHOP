import { Component, OnInit } from "@angular/core";
import { AddToCartService } from "../add-to-cart/add-to-cart.service";
@Component({
  selector: "app-cart-list",
  templateUrl: "./cart-list.component.html",
  styleUrls: ["./cart-list.component.css"],
})
export class CartListComponent implements OnInit {
  cartList: any[] = [];
  constructor(private addToCart: AddToCartService) {}
  ngOnInit(): void {
    this.cartList = this.addToCart.getCartItems();
  }
}
