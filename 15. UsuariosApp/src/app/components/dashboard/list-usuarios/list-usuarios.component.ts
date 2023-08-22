import { Component } from '@angular/core';
import { UsuarioService } from '../../../services/usuario.service'

@Component({
  selector: 'app-list-usuarios',
  templateUrl: './list-usuarios.component.html',
  styleUrls: ['./list-usuarios.component.css']
})
export class ListUsuariosComponent {

  listUsuarios: any[] = [];

  constructor(private _usuarioService: UsuarioService) {
    
  }

  ngOnInit(): void {
    this.getUsuarios();
  }

  getUsuarios(): void {
    this._usuarioService.getUsuarios().subscribe(data => {
      console.log(data);
      this.listUsuarios = data.result;
    });
  }
}
