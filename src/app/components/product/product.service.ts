import { environment } from './../../../environments/environment';
import { Product } from './product.model';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private snac: MatSnackBar, private http: HttpClient) { }

  showMensage(msg: string): void {
    this.snac.open(msg, 'ok', {
      duration: 2000, horizontalPosition: 'center',
      verticalPosition: 'bottom'
    })
  }

  createProduct(product: Product): Observable<Product> {
    return this.http.post<Product>(`${environment.uri}/products`, product);
  }
  
  listProduct(): Observable<Product[]> {
    return this.http.get<Product[]>(`${environment.uri}/products`);
  }
}
