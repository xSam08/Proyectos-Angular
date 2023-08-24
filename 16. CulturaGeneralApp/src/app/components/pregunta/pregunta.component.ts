import { Component } from '@angular/core';
import { Pregunta } from 'src/app/models/pregunta';
import { Respuesta } from 'src/app/models/respuesta';
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

  respuestaSeleccionada(respuesta: Respuesta, indexRta: number) {
    if (this._preguntaService.pregConfirmada === true) { 
      return;
    }
    this._preguntaService.opcionSeleccionada = respuesta;
    this._preguntaService.deshabilitarBtn = false;
    this._preguntaService.indexRespuesta = indexRta;
  }
  
  AddClassOption(respuesta: Respuesta) {

    // Pregunta seleccionada y NO está confirmada
    if (respuesta === this._preguntaService.opcionSeleccionada
                  && !this._preguntaService.pregConfirmada) {
      return 'active text-light';
    }

    // Respuesta correcta y está confirmada
    if (respuesta === this._preguntaService.opcionSeleccionada
                  && this._preguntaService.pregConfirmada
                  && this._preguntaService.opcionSeleccionada.esCorrecta === 1) {
      return 'list-group-item-success';
    }

    // Respuesta incorrecta y está confirmada
    if (respuesta === this._preguntaService.opcionSeleccionada
                  && this._preguntaService.pregConfirmada
                  && this._preguntaService.opcionSeleccionada.esCorrecta === 0) {
      return 'list-group-item-danger';
    }

    return '';
  }

  iconCorrecto(respuesta: Respuesta) {
    if (respuesta === this._preguntaService.opcionSeleccionada
                  && this._preguntaService.pregConfirmada
                  && this._preguntaService.opcionSeleccionada.esCorrecta === 1) {
      return true;
    }
    return false;
  }

  iconIncorrecto(respuesta: Respuesta) {
    if (respuesta === this._preguntaService.opcionSeleccionada
                  && this._preguntaService.pregConfirmada
                  && this._preguntaService.opcionSeleccionada.esCorrecta === 0) {
      return true;
    }
    return false;
  }
}
