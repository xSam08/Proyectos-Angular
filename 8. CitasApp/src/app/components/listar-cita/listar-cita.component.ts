import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-listar-cita',
  templateUrl: './listar-cita.component.html',
  styleUrls: ['./listar-cita.component.css']
})
export class ListarCitaComponent {

  @Input() listadoCitas: any
  @Output() deleteCita = new EventEmitter<number>();

  eliminarCita(index: number) {
    this.deleteCita.emit(index)
  }
}
