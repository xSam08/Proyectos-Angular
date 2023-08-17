import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-agregar-cita',
  templateUrl: './agregar-cita.component.html',
  styleUrls: ['./agregar-cita.component.css']
})
export class AgregarCitaComponent {
  nombre = ''
  fecha = ''
  hora = ''
  sintomas = ''
  formIncorrecto = false
  @Output() nuevaCita = new EventEmitter<any>();

  agregarCita() {
    if (this.nombre == '' || this.fecha == '' || this.hora == '' || this.sintomas == '') {
      this.formIncorrecto = true;
      return;
    }
    this.formIncorrecto = false;

    // Objeto para el padre
    const Cita = {
      nombre: this.nombre,
      fecha: this.fecha,
      hora: this.hora,
      sintomas: this.sintomas
    }
    this.nuevaCita.emit(Cita)
    this.resetCampos()
  }

  resetCampos() {
    this.nombre = ''
    this.fecha = ''
    this.hora = ''
    this.sintomas = ''
  }
}
