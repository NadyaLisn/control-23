import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ProductType} from "../../../../types/product-type";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit{
  public products: ProductType[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get<ProductType[]>('https://testologia.ru/tea').subscribe(data => {
      this.products = data
    })
  }
}
