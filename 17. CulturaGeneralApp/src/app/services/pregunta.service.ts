import { Injectable } from '@angular/core';
import { Pregunta } from '../models/pregunta';
import { Respuesta } from '../models/respuesta';

@Injectable({
  providedIn: 'root'
})
export class PreguntaService {

  indexPregunta: number = 0;

  public preguntas: Pregunta[] = [
    new Pregunta('¿Cuál es el país más grande y el más pequeño del mundo?', [
      new Respuesta('Rusia y Vaticano', 1),
      new Respuesta('Colombia y España', 0),
      new Respuesta('Canadá y Mónaco', 0),
      new Respuesta('Estados Unidos y India', 0)
    ]),
    new Pregunta('¿Cuál es el río más largo del mundo?', [
      new Respuesta('Nilo', 0),
      new Respuesta('Yangtsé', 0),
      new Respuesta('Amazonas', 1),
      new Respuesta('Misisipi', 0)
    ]),
    new Pregunta('¿Cuál es el océano más grande del mundo?', [
      new Respuesta('Atlántico', 0),
      new Respuesta('Pacífico', 1),
      new Respuesta('Índico', 0),
      new Respuesta('Ártico', 0)
    ]),
    new Pregunta('¿Cuál es el país más poblado del mundo?', [
      new Respuesta('China', 1),
      new Respuesta('India', 0),
      new Respuesta('Estados Unidos', 0),
      new Respuesta('Indonesia', 0)
    ]),
    new Pregunta('¿Cuál es el libro más vendido en el mundo después de la Biblia?' , [
      new Respuesta('El Principito', 0),
      new Respuesta('El Señor de los Anillos', 0),
      new Respuesta('El Quijote de la Mancha', 1),
      new Respuesta('El Alquimista', 0)
    ]),
    new Pregunta('¿Cuál es el país con más islas del mundo?', [
      new Respuesta('Filipinas', 0),
      new Respuesta('Indonesia', 0),
      new Respuesta('Finlandia', 0),
      new Respuesta('Suecia', 1)
    ]),
    new Pregunta('La sal común está formada por dos elementos, ¿cuáles son?', [
      new Respuesta('Sodio y potasio', 0),
      new Respuesta('Sodio y cloro', 1),
      new Respuesta('Sodio y magnesio', 0),
      new Respuesta('Sodio y azufre', 0)
    ]),
    new Pregunta('La sigla OTAN significa', [
      new Respuesta('Organización del Tratado del Atlántico Norte', 1),
      new Respuesta('Organización de Tratados de América del Norte', 0),
      new Respuesta('Organización de Tratados de Asia del Norte', 0),
      new Respuesta('Organización de Tratados de África del Norte', 0)
    ]),
    new Pregunta('¿Cuál es el país con más fronteras del mundo?', [
      new Respuesta('Rusia', 0),
      new Respuesta('China', 1),
      new Respuesta('Brasil', 0),
      new Respuesta('India', 0)
    ]),
    new Pregunta('¿Cuál es el país con más tiempo sin guerra?', [
      new Respuesta('Suiza', 0),
      new Respuesta('Suecia', 0),
      new Respuesta('Costa Rica', 1),
      new Respuesta('Japón', 0)
    ]),
  ]
  
  constructor() { }

  getPreguntas(): Pregunta[] {
    return this.preguntas.slice();
  }
}
