import { Component } from '@angular/core';
import { ShortUrlService } from 'src/app/services/short-url.service';

@Component({
  selector: 'app-short-url',
  templateUrl: './short-url.component.html',
  styleUrls: ['./short-url.component.css']
})
export class ShortUrlComponent {
  nombreUrl: string;
  urlShort: string;
  urlProcesada: boolean;
  loading: boolean;
  error: boolean;
  mensajeError: string;

  constructor(private _shortUrlService: ShortUrlService) {
    this.nombreUrl = '';
    this.urlShort = '';
    this.urlProcesada = false;
    this.loading = false;
    this.error = false;
    this.mensajeError = '';
  }

  procesarURL() {
    this.urlProcesada = false;

    if (this.nombreUrl === '') {
      this.loading = true;
      
      setTimeout(() => {
        this.mensajeError = 'No se permiten enlaces vacíos.'
        this.error = true;
        this.loading = false;
        
        setTimeout(() => {
          this.error = false;
        }, 3000);
      }, 2000);

      return;
    } else {
      this.loading = true;
      this.error = false;
      this._shortUrlService.getShortUrl(this.nombreUrl).subscribe(data => {
        setTimeout(() => {
          this.loading = false;
          this.urlShort = data.link;
          this.urlProcesada = true;
        }, 2000);
      }, error => {

        setTimeout(() => {
          this.mensajeError = 'Enlace inválido, intente nuevamente'
          this.error = true;
          this.loading = false;

          setTimeout(() => {
            this.error = false;
          }, 3000);
        }, 2000);
      });
    }
  }
}
