import { ProductService } from './../product.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {

  constructor(private serviceProduct: ProductService) { }

  ngOnInit(): void {
  }

  createProduct() {
    this.serviceProduct.showMensage('Produto criado com sucesso!')
  }
}
