import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class BuyNowService {
  iceCreamType: String = "";
  buyItems: any[] = [];

  constructor() {}
  addToBuyItems(item: any) {
    this.buyItems.push(item);
  }
  getBuyItems() {
    return this.buyItems;
  }
  setIceCreamType(iceCreamType: string) {
    this.iceCreamType = iceCreamType;
  }
  getIceCreamType() {
    return this.iceCreamType;
  }
}
