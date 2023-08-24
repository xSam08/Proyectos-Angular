import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-formulario-vacio',
  templateUrl: './formulario-vacio.component.html',
  styleUrls: ['./formulario-vacio.component.css']
})
export class FormularioVacioComponent {

  mensajeError: string;
  btn = 'Aceptar'

  constructor(public dialogRef: MatDialogRef<FormularioVacioComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {
    this.mensajeError = data.mensajeError;
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
