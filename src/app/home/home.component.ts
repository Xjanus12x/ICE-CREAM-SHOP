import { Component } from "@angular/core";
import { HomeService } from "./home.service";
import { Router } from "@angular/router";
import { BuyNowService } from "../buy-now/buy-now.service";
import { AddToCartService } from "../add-to-cart/add-to-cart.service";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"],
})
export class HomeComponent {
  menu: any;
  iceCreamType: string = "";
  constructor(
    private data: HomeService,
    private router: Router,
    private addToCart: AddToCartService,
    private buyNow: BuyNowService
  ) {}

  ngOnInit() {
    this.data.getMenu().subscribe((data) => {
      this.menu = data;
    });
  }
  handleButtonClick(event: any) {
    const target = event.target;
    const button = target.closest(".buttons button");
    if (button) {
      const buttonClass = button.classList[0];
      const article = target.closest("article");
      const h2 = article.querySelector("h2");
      switch (buttonClass) {
        case "add-to-cart":
          this.addToCart.setIceCreamType(h2.textContent);
          this.goToRoute("/add-to-cart");
          break;
        case "buy-now":
          this.buyNow.setIceCreamType(h2.textContent);
          this.goToRoute("/buy-now");
          break;
        default:
          break;
      }
    }
  }
  goToRoute(route: string) {
    this.router.navigate([`/${route}`]);
  }
}
