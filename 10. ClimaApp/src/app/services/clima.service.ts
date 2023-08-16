import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClimaService {

  url = 'http://api.openweathermap.org/data/2.5/forecast?'
  key = '9262244f76868fb364c8f87095897c53'

  constructor(private http: HttpClient) {
    
  }

  getClima(ciudad: string): Observable<any> {
    const URL = this.url + 'q=' + ciudad + '&appid=' + this.key;
    return this.http.get(URL).pipe(
      catchError(error => {
        console.error('Error en la solicitud de clima:', error);
        return of({});
      })
    );
  }
}
