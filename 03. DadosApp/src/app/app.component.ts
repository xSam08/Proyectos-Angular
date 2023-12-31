import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'DadosApp';
  dadoIzquierdo = '../assets/img/dice1.png';
  dadoDerecho = '../assets/img/dice2.png';
  numero1 = 0;
  numero2 = 2;

  mostrarDados(): void {
    this.dadoIzquierdo = '../assets/img/dice1.png';
    this.dadoDerecho = '../assets/img/dice2.png';
  }

  tirarDados(): void {
    this.numero1 = Math.round(Math.random() * 5) + 1;
    this.numero2 = Math.round(Math.random() * 5) + 1;
    this.dadoIzquierdo = '../assets/img/dice' + this.numero1 + '.png';
    this.dadoDerecho = '../assets/img/dice' + this.numero2 + '.png';
  }
}
