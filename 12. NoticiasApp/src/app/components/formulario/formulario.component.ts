import { Component } from '@angular/core';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent {

  categoriaSeleccionada = 'general';
  paisSeleccionado = 'co';

  categorias: any[] = [
    {value: 'general', nombre: 'General'},
    {value: 'business', nombre: 'Negocios'},
    {value: 'entertainment', nombre: 'Entretenimiento'},
    {value: 'health', nombre: 'Salud'},
    {value: 'science', nombre: 'Ciencia'},
    {value: 'sports', nombre: 'Deportes'},
    {value: 'technology', nombre: 'Tecnología'}
  ];

  paises: any[] = [
    {value: 'co', nombre: 'Colombia'},
    {value: 'ar', nombre: 'Argentina'},
    {value: 'br', nombre: 'Brasil'},
    {value: 'fr', nombre: 'Francia'},
    {value: 'mx', nombre: 'México'},
    {value: 'us', nombre: 'Estados Unidos'}
  ];

  obtenerValores(): void{
    console.log(this.categoriaSeleccionada);
    console.log(this.paisSeleccionado);
  }
}
