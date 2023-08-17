import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-resultado',
  templateUrl: './resultado.component.html',
  styleUrls: ['./resultado.component.css']
})
export class ResultadoComponent {

  IMC = 0;
  resultado = '';
  interpretacion = '';

  constructor (private route: ActivatedRoute) {
    this.IMC = +route.snapshot.paramMap.get('valor')!;
  }

  ngOnInit(): void{
    this.getResultado();
  }

  getResultado() {
    if (this.IMC < 18.5 ) {
      this.resultado = 'Bajo peso'
      this.interpretacion = 'Tienes un peso corporal más bajo de lo normal. Intenta comer un poco más.'
    } else if(this.IMC >= 18.5 && this.IMC <= 24.9) {
      this.resultado = 'Normal'
      this.interpretacion = 'Tienes un peso corporal normal. ¡Buen trabajo!'
    } else if (this.IMC >= 25 && this.IMC <= 29.9) {
      this.resultado = 'Sobrepeso'
      this.interpretacion = 'Tienes un peso corporal superior al normal. Intente hacer más ejercicio.' 
    } else {
      this.resultado = 'Obesidad'
      this.interpretacion = 'Tienes un peso corporal mucho más superior al normal. Cambia tus habitos por salud.'
    }
  }
}
