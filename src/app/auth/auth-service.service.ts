import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
import { MatSnackBar } from "@angular/material";

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  constructor(private http: HttpClient, private router: Router, public snackBar: MatSnackBar) { }

  private loginResponseUpdated = new Subject<any>();

   // Login Check
   LoginValidate(Usernamelogin: string, Passwordlogin: string) {
    const reqObject = {Usernamelogin, Passwordlogin};

    // tslint:disable-next-line: max-line-length
    this.http.post<{message: string, token: any, flag: string, tokenTimer: number, channel: string}>('http://localhost:3000/api/auth/signin', reqObject)
        .subscribe((response) => {
          if(response.flag === 'true') {

            this.router.navigate(['/']);
            // Storing Timeout and token in local storage
            window.localStorage.setItem('Token', response.token);
            window.localStorage.setItem('AuthStatus', 'true');
            window.localStorage.setItem('AppChannel', response.channel);

          } else {
            this.snackBar.open('Invalid credentials', 'X', {duration: 4000});
            // Response Object
            let res = {message: response.message, flag: response.flag};
            this.loginResponseUpdated.next(res);
          }

        });
   }

   getLoginValidateListener() {
      return this.loginResponseUpdated.asObservable();
   }


   // Logout Operation
   logout() {
    localStorage.removeItem('Token');
    localStorage.removeItem('AuthStatus');
    localStorage.removeItem('AppChannel');
    this.router.navigate(['auth/signin']);
   }






}
