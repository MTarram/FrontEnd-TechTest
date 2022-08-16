import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/shared/models/product.model';
import { ProductsApiService } from 'src/app/services/products-api.service';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css'],
})
export class ProductsListComponent implements OnInit {
  allProducts: Product[] = [];

  constructor(private productsService: ProductsApiService) {}

  ngOnInit(): void {
    this.productsService.getAllProducts().subscribe(data => {
      this.allProducts = data;
    });
  }
}
