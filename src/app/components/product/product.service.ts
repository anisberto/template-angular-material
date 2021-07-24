import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private snac: MatSnackBar) { }

  showMensage(msg: string): void {
    this.snac.open(msg, '', {
      duration: 2000, horizontalPosition: 'right',
      verticalPosition: 'bottom'
    })
  }

}
