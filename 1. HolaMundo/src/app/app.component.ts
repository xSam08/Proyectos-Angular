import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'HolaMundo';
  
  /* Databindig */
  nombre = 'Sam';
  textoPlaceholder = 'Escriba algo aquí:';
  deshabilitado = true;
  imgSrc = 'https://angular.io/assets/images/logos/angularjs/AngularJS-Shield.svg';
  texto = 'Esto es un video sobre Event Binding';
  textoTwoWay = '';
  
  constructor() {
    setInterval( ()=> this.deshabilitado = false, 3000);
  }

  getSuma(n1: number, n2: number){
    return n1 + n2;
  }

  cambiarTexto () {
    this.texto = 'En el próximo video veremos Two Way Data-Binding';
  }

  /* Directivas */
  listEstudiantes: any[] = [
    { nombre: 'Samuel Osuna', estado: 'Promocionado'},
    { nombre: 'Lucas Pérez', estado: 'Regular'},
    { nombre: 'Juan García', estado: 'Regular'},
    { nombre: 'Marta Gonzales', estado: 'Promocionado'},
    { nombre: 'Alejandro Jimenez', estado: 'Reprobado'},
    { nombre: 'Sofia Escalante', estado: 'Promocionado'}
  ]

  mostrar = true

  toggle() :void {
    this.mostrar = !this.mostrar
  }

  
}
