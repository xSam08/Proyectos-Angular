import { Component } from '@angular/core';
import { PresupuestoService } from 'src/app/services/presupuesto.service';

@Component({
  selector: 'app-ingresar-gasto',
  templateUrl: './ingresar-gasto.component.html',
  styleUrls: ['./ingresar-gasto.component.css']
})
export class IngresarGastoComponent {
  restante: number;
  nombreGasto: string;
  cantidad: number;
  formularioIncorrecto: boolean;
  textIncorrecto: string;

  constructor(private _presupuestoService: PresupuestoService) {
    this.restante = _presupuestoService.restante;
    this.nombreGasto = '';
    this.cantidad = 0;
    this.formularioIncorrecto = false;
    this.textIncorrecto = '';
  }

  agregarGasto() {

    // Mensaje para indicar que el restante se ha acabado
    if (this.restante === 0) {
      this.textIncorrecto = 'Has agotado todo tu presupuesto.'
      this.formularioIncorrecto = true;
      return;
    } else {

      if (this.nombreGasto === '' || this.cantidad <= 0) {
        this.textIncorrecto = 'Nombre del gasto o cantidad incorrecta';
        this.formularioIncorrecto = true;
        return;
      } else {
        
        this.formularioIncorrecto = false;
  
        if (this.cantidad > this.restante) {
          this.textIncorrecto = 'El valor del gasto es mayor que el presupuesto.'
          this.formularioIncorrecto = true;
          return;
        } else {
          this.formularioIncorrecto = false;
          this.restante -= this.cantidad;
  
          // Crear objeto
          const gasto = {
            nombre: this.nombreGasto,
            cantidad: this.cantidad
          };
      
          // Enviar objeto
          this._presupuestoService.agregarGasto(gasto);
      
          // Resetear formulario
          this.nombreGasto = '';
          this.cantidad = 0;
        }
      }
    }
  }
}
