import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PresupuestoService } from 'src/app/services/presupuesto.service';

@Component({
  selector: 'app-gastos',
  templateUrl: './gastos.component.html',
  styleUrls: ['./gastos.component.css']
})
export class GastosComponent {

  constructor(public _presupuestoService: PresupuestoService, private router: Router) { }

  ngOnInit(): void {
    if (this._presupuestoService.presupuesto === 0) {
      this.router.navigate(['/ingresar-presupuesto']);
    }
  }

}
