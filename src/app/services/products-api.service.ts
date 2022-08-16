import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Product } from '../shared/models/product.model';

@Injectable({
  providedIn: 'root',
})
export class ProductsApiService {
  private static allProductsAPI =
    environment.productsURL + '/products?limit=10';
  private static productDetailsAPI = environment.productsURL + '/products/';
  private static addProductAPI = environment.productsURL + '/products';

  constructor(private http: HttpClient) {}

  getAllProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(ProductsApiService.allProductsAPI);
  }

  getProductByID(productID: number): Observable<Product> {
    return this.http.get<Product>(
      ProductsApiService.productDetailsAPI + productID
    );
  }

  addNewProduct(productData: any): Observable<any> {
    return this.http.post<any>(ProductsApiService.addProductAPI, productData);
  }
}
