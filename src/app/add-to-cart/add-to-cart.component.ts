import { Component } from "@angular/core";
import { AddToCartService } from "./add-to-cart.service";
import { Router } from "@angular/router";
@Component({
  selector: "app-add-to-cart",
  templateUrl: "./add-to-cart.component.html",
  styleUrls: ["./add-to-cart.component.css"],
})
export class AddToCartComponent {
  sizeOptions = [{ name: "Small" }, { name: "Medium" }, { name: "Large" }];
  addOnsOptions = [
    { name: "Sprinkles" },
    { name: "Choco Chip" },
    { name: "Cookies" },
  ];

  name: string = "User";
  size: string = "Small";
  quantity: number = 1;
  addOns: string = "None";
  cart: any = {};
  constructor(private addToCart: AddToCartService, private router: Router) {}

  onSubmit() {
    this.cart.name = this.name;
    this.cart.iceCreamType = this.addToCart.getIceCreamType();
    this.cart.size = this.size;
    this.cart.quantity = this.quantity;
    this.cart.addOns = this.addOns;
    this.addToCart.addToCart(this.cart);
    this.goToRoute("/home");
  }
  goToRoute(route: string) {
    this.router.navigate([`/${route}`]);
  }
}
