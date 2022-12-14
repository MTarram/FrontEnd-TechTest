import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductsListComponent } from './products-list/products-list.component';
import { AddProductComponent } from './add-product/add-product.component';
import { ProductsRoutingModule } from './products-routing.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    ProductsListComponent,
    ProductDetailsComponent,
    AddProductComponent,
  ],
  imports: [CommonModule, ProductsRoutingModule, ReactiveFormsModule],
})
export class ProductsModule {}
