import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, RouterLink} from "@angular/router";


import {HttpClient} from "@angular/common/http";
import {ProductType} from "../../../../types/product-type";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent  implements OnInit {
  public products: ProductType[] = [];
  public product: ProductType;
  private productsUrl = 'https://testologia.ru/tea';
  constructor(
    private activeRoute: ActivatedRoute,
    private http: HttpClient,
  ) {
    this.product = {
      id: 0,
      image: '',
      title: '',
      description: '',
      price: 0
    };
  }

  ngOnInit(): void {
    this.activeRoute.params.subscribe(params => {
      const productId = params['id'];
      if (productId) {
        this.http.get<ProductType>(`${this.productsUrl}?id=${productId}`).subscribe(data => {
          this.product = data
        })
      }
    });
  }
}
