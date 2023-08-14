import { Component } from '@angular/core';
import { Router } from '@angular/router';

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

  constructor (private router: Router) {}

  cambiarAltura(event: any) {
    this.altura = event.target.value;
  }

  masculino() {
    this.genero = 'Masculino';
  }

  femenino() {
    this.genero = 'Femenino';
  }

  calcularIMC() {
    const IMC = this.peso / Math.pow(this.altura/100, 2);
    this.router.navigate(['/resultado', IMC.toFixed(2)])
  }
}
