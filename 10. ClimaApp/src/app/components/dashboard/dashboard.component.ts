import { Component } from '@angular/core';
import { ClimaService } from 'src/app/services/clima.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  urlImagen = 'https://cdn-icons-png.flaticon.com/512/1116/1116453.png?w=360'
  ciudad = ''
  temperatura = 0;
  humedad = 0;
  clima = ''
  query = false;
  loading = false;
  mostrarError = false;

  constructor(private _climaService: ClimaService) { }

  obtenerClima() {
    this.query = false;
    this.loading = true;

    this._climaService.getClima(this.ciudad).subscribe((data) => {
      
        console.log(data);
        this.loading = false;

        if (data.list && data.list.length > 0) {
          const climaActual = data.list[0]; // Accedemos al primer elemento del arreglo

          if (climaActual.main) {
            this.temperatura = climaActual.main.temp - 273;
            this.humedad = climaActual.main.humidity;
          }

          if (climaActual.weather && climaActual.weather.length > 0) {
            this.clima = climaActual.weather[0].main;
          } else {
            this.clima = 'Sin información de clima';
          }

          this.query = true;
        } else {
          console.log('No se encontraron datos de clima');
          this.mostrarError = true;
          this.cerrarErrorDespuesDe(2000); // Cierra la alerta después de 2 segundos
        }
      },
      (error) => {
        console.log(error);
        this.loading = false;
        this.query = false;
        this.error();
      }
    );
  }

  error() {
    this.mostrarError = true;
    this.cerrarErrorDespuesDe(3000); // Cierra la alerta después de 2 segundos
  }

  cerrarError() {
    this.mostrarError = false;
  }

  cerrarErrorDespuesDe(tiempo: number) {
    setTimeout(() => {
      this.cerrarError();
    }, tiempo);
  }
}
