import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Empleado } from 'src/app/models/empleado';
import { EmpleadoService } from 'src/app/services/empleado.service';

@Component({
  selector: 'app-list-empleado',
  templateUrl: './list-empleado.component.html',
  styleUrls: ['./list-empleado.component.css'],
})
export class ListEmpleadoComponent implements AfterViewInit {
  displayedColumns: string[] = ['nombreCompleto', 'correo', 'estadoCivil', 'fechaIngreso', 'genero', 'telefono', 'acciones'];
  dataSource: MatTableDataSource<Empleado>;
  listEmpleados: Empleado[] = [];

  // Para paginar la tabla
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private _empleadoService: EmpleadoService) {
    this.dataSource = new MatTableDataSource<Empleado>([]);
  }

  ngAfterViewInit() {
    this.cargarEmpleados();
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  cargarEmpleados() {
    this.listEmpleados = this._empleadoService.getEmpleados();
    this.dataSource = new MatTableDataSource(this.listEmpleados);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
}
