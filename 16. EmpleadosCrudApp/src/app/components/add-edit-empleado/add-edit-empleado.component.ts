import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Empleado } from 'src/app/models/empleado';
import { EmpleadoService } from 'src/app/services/empleado.service';
import { FormularioVacioComponent } from '../shared/formulario-vacio/formulario-vacio.component';

@Component({
  selector: 'app-add-edit-empleado',
  templateUrl: './add-edit-empleado.component.html',
  styleUrls: ['./add-edit-empleado.component.css']
})
export class AddEditEmpleadoComponent {

  estadosCiviles: any[] = ['Soltero', 'Casado', 'Divorciado', 'Viudo'];

  myForm: FormGroup;

  nombre = new FormControl('', [Validators.required]);
  email = new FormControl('', [Validators.required, Validators.email]);
  fecha = new FormControl('', [Validators.required]);
  telefono = new FormControl('', [Validators.required, Validators.minLength(10), Validators.maxLength(10)]);
  estado = new FormControl('', [Validators.required]);
  genero = new FormControl('', [Validators.required]);
  mensajeError: string = '';
  formSubmitted = false;

  constructor(private fb: FormBuilder,
              private _empleadoService: EmpleadoService,
              private route: Router,
              private snackBar: MatSnackBar,
              private dialog: MatDialog) {
    this.myForm = this.fb.group({
      nombre: this.nombre,
      email: this.email,
      fecha: this.fecha,
      telefono: this.telefono,
      estado: this.estado,
      genero: this.genero
    });
  }

  openDialog() {
    const dialogRef = this.dialog.open(FormularioVacioComponent, {
      width: '400px',
      data: { mensajeError: this.mensajeError }
    });
  
    dialogRef.afterClosed().subscribe(() => {
      console.log('Diálogo cerrado');
    });
  }

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

  guardarEmpleado() {
    if (this.myForm.valid) {
      const empleado: Empleado = {
        nombreCompleto: this.myForm.get('nombre')?.value,
        correo: this.myForm.get('email')?.value,
        fechaIngreso: this.myForm.get('fecha')?.value,
        telefono: this.myForm.get('telefono')?.value,
        estadoCivil: this.myForm.get('estado')?.value,
        genero: this.myForm.get('genero')?.value
      };
  
      this._empleadoService.agregarEmpleado(empleado);
      this.snackBar.open('El empleado fue registrado con éxito', '', {
        duration: 3000
      });
      this.route.navigate(['/list-empleados']);
    } else {
      this.mensajeError = 'Por favor, complete todos los campos correctamente.';
      this.openDialog();
    }
  }
}
