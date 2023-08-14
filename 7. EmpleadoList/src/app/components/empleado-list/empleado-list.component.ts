import { Component } from '@angular/core';
import { Empleado } from 'src/app/models/Empleado';

@Component({
  selector: 'app-empleado-list',
  templateUrl: './empleado-list.component.html',
  styleUrls: ['./empleado-list.component.css']
})
export class EmpleadoListComponent {

  cont = 0
  radioButtonSeleccionado = 'Todos';

  listEmpleados: Empleado[] = [
    { legajo: this.cont += 1, nombre: 'Juan', apellido: 'Pérez', genero: 'Masculino', salario: 2600000},
    { legajo: this.cont += 1, nombre: 'Marcos', apellido: 'Márquez', genero: 'Masculino', salario: 3000000},
    { legajo: this.cont += 1, nombre: 'Gloria', apellido: 'García', genero: 'Femenino', salario: 3500000},
    { legajo: this.cont += 1, nombre: 'Alexis', apellido: 'Sanabria', genero: 'Masculino', salario: 2300000},
    { legajo: this.cont += 1, nombre: 'Samantha', apellido: 'Hernández', genero: 'Femenino', salario: 5000000},
    { legajo: this.cont += 1, nombre: 'Santiago', apellido: 'Obregón', genero: 'Masculino', salario: 1160000}
  ]

  constructor () {

  }

  getTotalEmpleados():number {
    return this.listEmpleados.length
  }

  getTotalFemeninos():number {
    return this.listEmpleados.filter(list => list.genero === 'Femenino').length
  }

  getTotalMasculinos():number {
    return this.listEmpleados.filter(list => list.genero === 'Masculino').length
  }

  empleadoCountRadioButtonChange(radioButtonSelec: string):void {
    this.radioButtonSeleccionado = radioButtonSelec;
  }
}
