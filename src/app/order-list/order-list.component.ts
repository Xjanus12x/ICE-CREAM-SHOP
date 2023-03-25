import { Component, OnInit } from "@angular/core";
import { BuyNowService } from "../buy-now/buy-now.service";
@Component({
  selector: "app-order-list",
  templateUrl: "./order-list.component.html",
  styleUrls: ["./order-list.component.css"],
})
export class OrderListComponent implements OnInit {
  buyNowList: any[] = [];
  constructor(private buyNow: BuyNowService) {}

  ngOnInit(): void {
    this.buyNowList = this.buyNow.getBuyItems();
  }
}
