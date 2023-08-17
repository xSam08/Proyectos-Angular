import { Component } from '@angular/core';
import { Tarea } from 'src/app/models/Tarea';

@Component({
  selector: 'app-tareas',
  templateUrl: './tareas.component.html',
  styleUrls: ['./tareas.component.css']
})
export class TareasComponent {

  listTareas: Tarea[] = []
  nombreTarea = '';
  noHayTareas = false;

  agregarTarea(event: any) {
    if (event.key === 'Enter' && this.nombreTarea.trim() !== '') {
      // Crear un objeto Tarea
      const tarea: Tarea = {
        nombre: this.nombreTarea,
        estado: false
      };

      // Agregar el objeto Tarea al Array
      this.listTareas.push(tarea);

      // Reset form
      this.nombreTarea = '';
    }
  }

  eliminarTarea(index: number): void {
    this.listTareas.splice(index, 1);
    this.noHayTareas = this.listTareas.length === 0;
  }

  actualizarTarea(tarea: Tarea, index: number): void {
    this.listTareas[index].estado = !tarea.estado;
  }
}
