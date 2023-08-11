import { Component } from '@angular/core';

@Component({
  selector: 'app-convertidor',
  templateUrl: './convertidor.component.html',
  styleUrls: ['./convertidor.component.css']
})
export class ConvertidorComponent {
  cantidad = 0;
  tengo = 'USD';
  quiero = 'EUR';
  total = 0;
  monedas: string[] = ['USD', 'EUR', 'LIBRA']

  convertir():void {
    switch(this.tengo) {
      case 'USD':
        if (this.quiero === 'USD') {
          this.total = this.cantidad;
        }else if (this.quiero === 'EUR') {
          this.total = this.cantidad * 0.91;
        }else if (this.quiero === 'LIBRA') {
          this.total = this.cantidad * 0.79;
        }
        break;
      case 'EUR':
        if (this.quiero === 'USD') {
          this.total = this.cantidad * 1.09;
        }else if (this.quiero === 'EUR') {
          this.total = this.cantidad;
        }else if (this.quiero === 'LIBRA') {
          this.total = this.cantidad * 0.86;
        }
        break;
      case 'LIBRA':
        if (this.quiero === 'USD') {
          this.total = this.cantidad * 1.27;
        }else if (this.quiero === 'EUR') {
          this.total = this.cantidad * 1.16;
        }else if (this.quiero === 'LIBRA') {
          this.total = this.cantidad;
        }
        break;
    }
  }
}
