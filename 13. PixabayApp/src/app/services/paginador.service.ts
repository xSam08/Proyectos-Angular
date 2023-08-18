import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PaginadorService {
  private mostrarPaginadorSubject = new BehaviorSubject<boolean>(false);
  mostrarPaginador$ = this.mostrarPaginadorSubject.asObservable();

  mostrarPaginador(valor: boolean) {
    this.mostrarPaginadorSubject.next(valor);
  }
}
