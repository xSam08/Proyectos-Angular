import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class ShortInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const TOKEN = 'd25255bca8915e58ebec1977fefc3667055b5836';

    request = request.clone({ setHeaders: {Authorization: 'Bearer ' + TOKEN} })
    
    return next.handle(request);
  }
}
