import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
import { MatSnackBar } from '@angular/material';

@Injectable({
  providedIn: 'root'
})
export class CommServiceService {

  public token: string;

  constructor(private http: HttpClient, private router: Router, public snackBar: MatSnackBar) { }

  private composeBoxResponseUpdated = new Subject<any>();
  private fetchingEmailsResponseUpdated = new Subject<any>();
  private fetchingEmailsDraftResponseUpdated = new Subject<any>();

// ---------------------------------------------------------------------------------------------------------------------------
  ComposeEmailSubmit(emailrecipients: object, emailsubject: string, emailbody: string) {

    const reqObject = {emailrecipients, emailsubject, emailbody};

    // tslint:disable-next-line: max-line-length
    this.http.post<{message: string, flag: string, Info: string}>('https://app-warehouse-backend.herokuapp.com/api/communicate/compose_email_send', reqObject)
      .subscribe((response) => {
        const res = {message: response.message, flag: response.flag};
        this.composeBoxResponseUpdated.next(res);
      });

  }// close ComposeEmailSubmit

  getComposeEmailSubmitListener() {
    return this.composeBoxResponseUpdated.asObservable();
  }

// ---------------------------------------------------------------------------------------------------------------------------

// ---------------------------------------------------------------------------------------------------------------------------

FetchingSendEmail() {

    // tslint:disable-next-line: max-line-length
    this.http.get<{message: string, flag: string, send_Mails: string, send_Count: string}>('https://app-warehouse-backend.herokuapp.com/api/communicate/getting_send_emails')
      .subscribe((response) => {
        const res = {message: response.message, flag: response.flag, send_Mails: response.send_Mails, send_Count: response.send_Count};
        this.fetchingEmailsResponseUpdated.next(res);
      });

  }// close ComposeEmailSubmit

  getSendEmailListener() {
    return this.fetchingEmailsResponseUpdated.asObservable();
  }

// ---------------------------------------------------------------------------------------------------------------------------

// ---------------------------------------------------------------------------------------------------------------------------

  FetchingDraftEmail() {

    // tslint:disable-next-line: max-line-length
    this.http.get<{message: string, flag: string, draft_Mails: string, draft_Count: string}>('https://app-warehouse-backend.herokuapp.com/api/communicate/getting_draft_emails')
      .subscribe((response) => {
        const res = {message: response.message, flag: response.flag, draft_Mails: response.draft_Mails, draft_Count: response.draft_Count};
        this.fetchingEmailsDraftResponseUpdated.next(res);
      });

  }// close ComposeEmailSubmit

  getDraftEmailListener() {
    return this.fetchingEmailsDraftResponseUpdated.asObservable();
  }

// ---------------------------------------------------------------------------------------------------------------------------


}// close Class
