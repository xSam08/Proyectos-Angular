import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  url = 'https://gorest.co.in/public-api/users'
  token = 'd123414cd7c1b12bde86c2abf9922ee993c6e437e45b929d9d594bc2daf4925c'

  constructor(private http: HttpClient) {

  }

  getUsuarios(): Observable<any> {
    return this.http.get<any>(this.url + '?access-token=' + this.token);
  }
}
