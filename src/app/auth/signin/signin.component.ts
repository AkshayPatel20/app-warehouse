import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import { AuthServiceService } from '../auth-service.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  errorMessageUsername = false;
  errorMessagePassword = false;
  hide = true;
  submitBtndisabled = false;
  progressLoader = false;

  constructor(public authService: AuthServiceService) { }

  ngOnInit() {
  }

  // ON LOGIN SUBMIT
  onLoginSubmit(Usernamelogin: string, Passwordlogin: string) {

    // Validation Field
    if (Usernamelogin == '') {
      this.errorMessageUsername = true;
      return false;
    }
    if (Passwordlogin == '') {
      this.errorMessagePassword = true;
      return false;
    }

    // Disable Submit Button
    this.submitBtndisabled = true;

    // Showing Loader
    this.progressLoader = true;

    // Sending Data  to Service
    this.authService.LoginValidate(Usernamelogin, Passwordlogin);
    this.authService.getLoginValidateListener()
        .subscribe((GettingResponse: any) => {
          if(GettingResponse.flag == 'false'){
            this.submitBtndisabled = false;
            this.progressLoader = false;
          }
        });

  }// close onLoginSubmit

}
