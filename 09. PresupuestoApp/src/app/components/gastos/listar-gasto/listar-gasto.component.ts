import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { PresupuestoService } from 'src/app/services/presupuesto.service';

@Component({
  selector: 'app-listar-gasto',
  templateUrl: './listar-gasto.component.html',
  styleUrls: ['./listar-gasto.component.css']
})
export class ListarGastoComponent {

  subscription: Subscription;
  presupuesto: number;
  restante: number;
  listGastos: any[] = [];

  constructor(private _presupuestoService: PresupuestoService) {
    this.presupuesto = _presupuestoService.presupuesto;
    this.restante = _presupuestoService.restante;
    this.subscription = this._presupuestoService.getGastos().subscribe(data => {
      this.restante = this.restante - data.cantidad;
      this.listGastos.push(data);
    })
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  calcularTotalGastos(): number {
    return this.listGastos.reduce((total, gasto) => total + gasto.cantidad, 0);
  }

  calcularPorcentajeGastado(): number {
    return Math.round((this.calcularTotalGastos() / this.presupuesto) * 100);
  }

  aplicarRestante() {
    if (this.presupuesto / 4 > this.restante){
      return 'alert alert-danger';
    } else if (this.presupuesto / 2 > this.restante){
      return 'alert alert-warning';
    } else {
      return 'alert alert-secondary';
    }
  }
}
