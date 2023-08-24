import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Pregunta } from 'src/app/models/pregunta';
import { PreguntaService } from 'src/app/services/pregunta.service';

@Component({
  selector: 'app-respuesta',
  templateUrl: './respuesta.component.html',
  styleUrls: ['./respuesta.component.css']
})
export class RespuestaComponent {

  listPreguntas: Pregunta[];
  respuestasUsuario: any[];

  constructor(public _preguntaService: PreguntaService, 
              public router: Router) {
    this.listPreguntas = this._preguntaService.preguntas;
    this.respuestasUsuario = this._preguntaService.respuestasUsuario;
  }

  volver() {
    this._preguntaService.respuestasUsuario = [];
    this.router.navigate(['/']);
  }
}
