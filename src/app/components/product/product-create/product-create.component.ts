import { Router } from '@angular/router';
import { Product } from './../product.model';
import { ProductService } from './../product.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {
  product: Product = { name: '', price: 10.0 };

  constructor(private serviceProduct: ProductService, private router: Router) { }

  ngOnInit(): void {
  }

  createProduct() {
    if (this.product.name !== undefined && this.product.name !== '') {
      this.serviceProduct.createProduct(this.product).subscribe((result) => {
        this.serviceProduct.showMensage('Produto criado! product: ' + result.name)
        setTimeout(() => {
          this.router.navigate(['/products'])
        }, 2000);
      })
    } else {
      alert('Nome invalido')
    }
  }
}
