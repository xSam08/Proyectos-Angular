import { Injectable } from '@angular/core';

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
      estadoCivil: 'Soltero',
      genero: 'Masculino'
    },
    {
      nombreCompleto: 'Maria Martinez',
      telefono: 123456789,
      correo: 'mariamartinez@mail.com',
      fechaIngreso: new Date(),
      estadoCivil: 'Casada',
      genero: 'Femenino'
    },
    {
      nombreCompleto: 'Pedro Perez',
      telefono: 123456789,
      correo: 'pedrop@mail.com',
      fechaIngreso: new Date(),
      estadoCivil: 'Soltero',
      genero: 'Masculino'
    },
    {
      nombreCompleto: 'Jose Perez',
      telefono: 123456789,
      correo: 'josep@mail.com',
      fechaIngreso: new Date(),
      estadoCivil: 'Soltero',
      genero: 'Masculino'
    },
    {
      nombreCompleto: 'Ana Perez',
      telefono: 123456789,
      correo: 'anap@mail.com',
      fechaIngreso: new Date(),
      estadoCivil: 'Soltero',
      genero: 'Femenino'
    },
    {
      nombreCompleto: 'Juan Perez',
      telefono: 123456789,
      correo: 'juanperez@mail.com',
      fechaIngreso: new Date(),
      estadoCivil: 'Soltero',
      genero: 'Masculino'
    },
    {
      nombreCompleto: 'Maria Martinez',
      telefono: 123456789,
      correo: 'mariam@mail.com',
      fechaIngreso: new Date(),
      estadoCivil: 'Casada',
      genero: 'Femenino'
    },
    {
      nombreCompleto: 'Pedro Perez',
      telefono: 123456789,
      correo: 'pedrop@mail.com',
      fechaIngreso: new Date(),
      estadoCivil: 'Soltero',
      genero: 'Masculino'
    },
    {
      nombreCompleto: 'Jose Perez',
      telefono: 123456789,
      correo: 'josep@mail.com',
      fechaIngreso: new Date(),
      estadoCivil: 'Soltero',
      genero: 'Masculino'
    },
    {
      nombreCompleto: 'Ana Perez',
      telefono: 123456789,
      correo: 'anap@mail.com',
      fechaIngreso: new Date(),
      estadoCivil: 'Soltero',
      genero: 'Femenino'
    }
  ]

  constructor() { }

  getEmpleados() {
    return this.listEmpleados.slice();
  }
}
