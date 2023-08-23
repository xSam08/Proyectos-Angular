export class Empleado {
    nombreCompleto: string;
    telefono: number;
    correo: string;
    fechaIngreso: Date;
    estadoCivil: string;
    genero: string;

    constructor() {
        this.nombreCompleto = '';
        this.telefono = 0;
        this.correo = '';
        this.fechaIngreso = new Date();
        this.estadoCivil = '';
        this.genero = '';
    }
}