import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ProductsApiService } from 'src/app/services/products-api.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css'],
})
export class AddProductComponent implements OnInit {
  productForm: FormGroup;

  constructor(
    private productsService: ProductsApiService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.productForm = new FormGroup({
      title: new FormControl(null, Validators.required),
      price: new FormControl(null, Validators.required),
      category: new FormControl(null, Validators.required),
      image: new FormControl(null, Validators.required),
      description: new FormControl(null, Validators.required),
    });
  }

  onSubmit() {
    this.productsService.addNewProduct(this.productForm.value).subscribe(
      (data) => {
        alert('Product Added Successfully!');
        this.router.navigate(['/products']);
        console.log('New product added: ', data);
      },
      (err) => console.log('Error: ', err)
    );
  }
}
