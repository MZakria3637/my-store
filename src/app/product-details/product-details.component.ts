import { CartService } from './../cart.service';
import { Product } from './../products';
import { Component,  OnInit } from '@angular/core';
import { products } from '../products';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent
{
  addToCart(product: Product)
  {
    this.cartService.addToCart(product)
    window.alert("Your product has been added to the cart !!")
  }
  product: Product | undefined;
  constructor(private route: ActivatedRoute,
  private cartService:CartService) { }
  ngOnInit()
  {
    const routeParams = this.route.snapshot.paramMap;
    const productIdFromRoute = Number(routeParams.get("productId"))
    this.product=products.find(product=>product.id===productIdFromRoute)
 }
}
