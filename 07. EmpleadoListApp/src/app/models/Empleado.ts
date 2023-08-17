export class Empleado {
    legajo: number
    nombre: string
    apellido: string
    genero: string
    salario: number

    constructor(legajo:number, nombre:string, apellido:string, genero:string, salario:number) {
        this.legajo = legajo
        this.nombre = nombre
        this.apellido = apellido
        this.genero = genero
        this.salario = salario
    }
}