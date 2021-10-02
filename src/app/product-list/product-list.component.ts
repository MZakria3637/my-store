import { Component } from "@angular/core";
import { products } from "../products";
@Component({
  selector: "product-list",
  templateUrl: "./product-list.component.html",
  styleUrls: ["./product-list.component.scss"]
})

export class ProductListComponent {
  products = products
  share() {
    alert("The Product Has Been Shared ")
  }
  onNotify(){
    alert("you will be notified whren product gioes on sale ")
  }
}
