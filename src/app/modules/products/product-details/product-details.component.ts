import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/shared/models/product.model';
import { ProductsApiService } from 'src/app/services/products-api.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css'],
})
export class ProductDetailsComponent implements OnInit {
  productID: number = 0;
  currentProduct: Product = {};

  constructor(
    private route: ActivatedRoute,
    private productsAPI: ProductsApiService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.productID = params['id'];
      this.productsAPI.getProductByID(this.productID).subscribe((product) => {
        this.currentProduct = product;
      });
    });
  }
}
