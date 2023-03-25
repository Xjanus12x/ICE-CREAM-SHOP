import { Component } from "@angular/core";
import { BuyNowService } from "./buy-now.service";
import { Router } from "@angular/router";
@Component({
  selector: "app-buy-now",
  templateUrl: "./buy-now.component.html",
  styleUrls: ["./buy-now.component.css"],
})
export class BuyNowComponent {
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
  buyItem: any = {};
  constructor(private buyNow: BuyNowService, private router: Router) {}

  onSubmit() {
    this.buyItem.name = this.name;
    this.buyItem.iceCreamType = this.buyNow.getIceCreamType();
    this.buyItem.size = this.size;
    this.buyItem.quantity = this.quantity;
    this.buyItem.addOns = this.addOns;
    this.buyNow.addToBuyItems(this.buyItem);
    this.goToRoute("/home");
    console.log("Buy", this.buyNow.buyItems);
  }
  goToRoute(route: string) {
    this.router.navigate([`/${route}`]);
  }
}
