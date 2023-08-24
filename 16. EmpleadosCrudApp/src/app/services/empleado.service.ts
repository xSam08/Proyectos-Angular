import { Injectable } from '@angular/core';
import { Empleado } from '../models/empleado';

@Injectable({
  providedIn: 'root'
})
export class EmpleadoService {

  listEmpleados: any[] = [
    {
      nombreCompleto: 'Juan Perez',
      telefono: 123456789,
      correo: 'juanperez@mail.com',
      fechaIngreso: new Date(),
      estadoCivil: 'Soltero(a)',
      genero: 'Masculino'
    },
    {
      nombreCompleto: 'Maria Martinez',
      telefono: 123456789,
      correo: 'mariamartinez@mail.com',
      fechaIngreso: new Date(),
      estadoCivil: 'Casado(a)',
      genero: 'Femenino'
    },
    {
      nombreCompleto: 'Pedro Perez',
      telefono: 123456789,
      correo: 'pedrop@mail.com',
      fechaIngreso: new Date(),
      estadoCivil: 'Soltero(a)',
      genero: 'Masculino'
    },
    {
      nombreCompleto: 'Jose Perez',
      telefono: 123456789,
      correo: 'josep@mail.com',
      fechaIngreso: new Date(),
      estadoCivil: 'Soltero(a)',
      genero: 'Masculino'
    },
    {
      nombreCompleto: 'Ana Perez',
      telefono: 123456789,
      correo: 'anap@mail.com',
      fechaIngreso: new Date(),
      estadoCivil: 'Soltero(a)',
      genero: 'Femenino'
    }
  ]

  constructor() { }

  getEmpleados() {
    return this.listEmpleados.slice();
  }

  eliminarEmpleado(index: number) {
    this.listEmpleados.splice(index, 1);
  }

  agregarEmpleado(empleado: Empleado) {
    this.listEmpleados.unshift(empleado);
  }

  getEmpleado(index: number) {
    return this.listEmpleados[index];
  }

  editarEmpleado(empleado: Empleado, idEmpleado: number) {
    this.listEmpleados[idEmpleado] = empleado;
  }
}
