import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class AddToCartService {
  iceCreamType: String = "";
  cartItems: any[] = [];
  constructor() {}
  addToCart(item: any) {
    this.cartItems.push(item);
  }
  getCartItems() {
    return this.cartItems;
  }
  setIceCreamType(iceCreamType: string) {
    this.iceCreamType = iceCreamType;
  }
  getIceCreamType() {
    return this.iceCreamType;
  }
}
