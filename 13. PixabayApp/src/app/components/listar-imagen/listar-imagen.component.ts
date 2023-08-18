import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { ImagenService } from 'src/app/services/imagen.service';

@Component({
  selector: 'app-listar-imagen',
  templateUrl: './listar-imagen.component.html',
  styleUrls: ['./listar-imagen.component.css']
})
export class ListarImagenComponent {

  termino: string;
  suscripcion: Subscription;
  listImagenes: any[] = []; 
  loading: boolean;
  imagenesPorPagina: number = 32;
  paginaActual: number = 1;
  calcularTotalPaginas: number = 0;
  totalPaginasMenosUno: number = 0;
  mostrarPaginador: boolean = false;

  constructor(private _imagenService: ImagenService) { 
    this.termino = '';
    this.loading = false;

    this.suscripcion = this._imagenService.getTerminoBusqueda().subscribe(data => {
      this.termino = data;
      this.paginaActual = 1;
      this.loading = true;
      this.obtenerImagenes();
    });
  }

  obtenerImagenes() {
    this.listImagenes = [];

    this._imagenService.getImagenes(this.termino, this.imagenesPorPagina, this.paginaActual).subscribe(data => {

      setTimeout(() => {
        this.loading = false;

        this.listImagenes = data.hits;

        if (data.totalHits > this.imagenesPorPagina) {
          this.mostrarPaginador = true;
        } else { 
          this.mostrarPaginador = false;
        }

        if (data.hits.length === 0) {
          this._imagenService.setError('No se encontraron resultados, intente con otro término de búsqueda.');
          return;
        }

        this.calcularTotalPaginas = (Math.ceil(data.totalHits / this.imagenesPorPagina));
        this.totalPaginasMenosUno = this.calcularTotalPaginas - 1;
      }, 2000);

      
    }, error => {
      this._imagenService.setError('Servidor de Pixabay caído, intente más tarde.');
      this.loading = false;
    });
  }

  paginaAnterior() {
    this.paginaActual--;
    this.loading = true;
    this.mostrarPaginador = false;
    this.listImagenes = [];
    this.obtenerImagenes();

    setTimeout(() => {
      this.mostrarPaginador = true;
    }, 2500);
  }

  paginaPosterior() {
    this.paginaActual++;
    this.loading = true;
    this.mostrarPaginador = false;
    this.listImagenes = [];
    this.obtenerImagenes();

    setTimeout(() => {
      this.mostrarPaginador = true;
    }, 2500);
  }

  irAPrimeraPagina () {
    this.paginaActual = 1;
    this.loading = true;
    this.mostrarPaginador = false;
    this.listImagenes = [];
    this.obtenerImagenes();

    setTimeout(() => {
      this.mostrarPaginador = true;
    }, 2500);
  }

  irAUltimaPagina () {
    this.paginaActual = this.calcularTotalPaginas;
    this.loading = true;
    this.mostrarPaginador = false;
    this.listImagenes = [];
    this.obtenerImagenes();

    setTimeout(() => {
      this.mostrarPaginador = true;
    }, 2500);
  }
}
