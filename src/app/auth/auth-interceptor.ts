import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthServiceService } from './auth-service.service';
import { Observable } from 'rxjs';

@Injectable()

export class AuthInterceptor implements HttpInterceptor {

  constructor(private authService: AuthServiceService) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    let authToken = window.localStorage.getItem('Token');
    if (authToken == null) {
      authToken = 'SessionExpired';
    }

    const authRequest =  req.clone({
      setHeaders: {
        Authorization: authToken
      }
    });

    return next.handle(authRequest);

  } // close intercept


}// close class
