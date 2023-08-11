import { Component } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent {
  edad = 25
  peso = 60
  altura = 170
  genero = ''

  cambiarAltura(event: any) {
    this.altura = event.target.value;
  }

  masculino() {
    this.genero = 'Masculino';
  }

  femenino() {
    this.genero = 'Femenino';
  }
}
