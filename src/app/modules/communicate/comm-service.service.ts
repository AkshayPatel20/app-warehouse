import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
import { MatSnackBar } from '@angular/material';

@Injectable({
  providedIn: 'root'
})
export class CommServiceService {

  constructor(private http: HttpClient, private router: Router, public snackBar: MatSnackBar) { }

  private composeBoxResponseUpdated = new Subject<any>();

// ---------------------------------------------------------------------------------------------------------------------------
  ComposeEmailSubmit(emailrecipients: object, emailsubject: string, emailbody: string) {
    const reqObject = {emailrecipients, emailsubject, emailbody};

    // tslint:disable-next-line: max-line-length
    this.http.post<{message: string, flag: string, Info: string}>('http://localhost:3000/api/communicate/compose_email_send', reqObject)
      .subscribe((response) => {
        const res = {message: response.message, flag: response.flag};
        this.composeBoxResponseUpdated.next(res);
      });

  }// close ComposeEmailSubmit

  getComposeEmailSubmitListener() {
    return this.composeBoxResponseUpdated.asObservable();
  }

// ---------------------------------------------------------------------------------------------------------------------------



}// close Class
