import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PreguntaService } from 'src/app/services/pregunta.service';

@Component({
  selector: 'app-botonera',
  templateUrl: './botonera.component.html',
  styleUrls: ['./botonera.component.css']
})
export class BotoneraComponent {

  btnString: string = 'Aceptar';

  constructor(public _preguntaService: PreguntaService, private router: Router) { }

  siguiente() {
    switch (this.btnString) {
      case 'Aceptar': {
        this._preguntaService.pregConfirmada = true;
        this.btnString = 'Siguiente';

        if (this._preguntaService.preguntas.length - 1 == this._preguntaService.indexPregunta) {
          this.btnString = 'Finalizar';
        }
        break;
      }
      case 'Siguiente': {
        this._preguntaService.indexPregunta++;
        this._preguntaService.respuestasUsuario.push(this._preguntaService.indexRespuesta);
        this._preguntaService.deshabilitarBtn = true;
        this._preguntaService.pregConfirmada = false;
        this.btnString = 'Aceptar';
        break;
      }
      case 'Finalizar': {
        this._preguntaService.respuestasUsuario.push(this._preguntaService.indexRespuesta);
        this.router.navigate(['/respuesta']);
        break;
      }
    }
  }
}
