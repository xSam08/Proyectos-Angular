import { Component } from '@angular/core';
import { Pregunta } from 'src/app/models/pregunta';
import { PreguntaService } from 'src/app/services/pregunta.service';

@Component({
  selector: 'app-pregunta',
  templateUrl: './pregunta.component.html',
  styleUrls: ['./pregunta.component.css']
})
export class PreguntaComponent {

  listPregunta: Pregunta[];

  constructor(public _preguntaService: PreguntaService) {
    this.listPregunta = this._preguntaService.getPreguntas();
  }

  obtenerPregunta() {
    return this.listPregunta[this._preguntaService.indexPregunta].descripcionPregunta;
  }
  
}
