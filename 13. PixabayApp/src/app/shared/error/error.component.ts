import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { ImagenService } from 'src/app/services/imagen.service';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.css']
})
export class ErrorComponent {

  texto: string;
  mostrar: boolean;
  suscripcion: Subscription;
  
  constructor(private _imagenService: ImagenService) {
    this.texto = '';
    this.mostrar = false;

    this.suscripcion = this._imagenService.getError().subscribe(data => {
      this.texto = data;
      this.mostrarError();
    });
  }

  mostrarError() {
    this.mostrar = true;

    setTimeout(() => {
      this.mostrar = false;
    }, 3000);
  }

  ngOnDestroy(): void {
    this.suscripcion.unsubscribe();
  }
}
