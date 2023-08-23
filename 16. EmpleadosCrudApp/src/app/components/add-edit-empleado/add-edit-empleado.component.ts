import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-edit-empleado',
  templateUrl: './add-edit-empleado.component.html',
  styleUrls: ['./add-edit-empleado.component.css']
})
export class AddEditEmpleadoComponent {

  estadosCiviles: any[] = ['Soltero', 'Casado', 'Divorciado', 'Viudo'];
  nombre = new FormControl('', [Validators.required]);
  email = new FormControl('', [Validators.required, Validators.email]);
  fecha = new FormControl('', [Validators.required]);
  telefono = new FormControl('', [Validators.required, Validators.minLength(10), Validators.maxLength(10)]);
  estado = new FormControl('', [Validators.required]);
  genero = new FormControl('', [Validators.required]);
  mensajeError: string = '';
  formSubmitted = false;

  constructor() { }

  onSubmit() {
    this.formSubmitted = true;
  }

  getErrorMessage(control: FormControl) {
    if (control.hasError('required')) {
      return 'Este campo es requerido';
    } else if (control.hasError('email')) {
      return 'El correo electrónico no es válido';
    } else if (control.hasError('minlength')) {
      return 'El teléfono debe tener al menos 10 caracteres';
    } else if (control.hasError('maxlength')) {
      return 'El teléfono no debe tener más de 10 caracteres';
    }

    return '';
  }

  getGeneroErrorMessage() {
    return this.formSubmitted && this.genero.hasError('required') ? 'El género es requerido' : '';
  }
}
