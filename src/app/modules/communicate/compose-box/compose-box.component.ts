import { Component, OnInit, Inject } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';
import { CommServiceService } from '../comm-service.service';
import { MatBottomSheet } from '@angular/material';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { MatChipInputEvent } from '@angular/material/chips';

export interface Address {
  name: string;
}

@Component({
  selector: 'app-compose-box',
  templateUrl: './compose-box.component.html',
  styleUrls: ['./compose-box.component.css']
})

export class ComposeBoxComponent implements OnInit {
  progressLoader = false;

  // Chip AutoComplete
  visible = true;
  selectable = true;
  removable = true;
  addOnBlur = true;
  readonly separatorKeysCodes: number[] = [ENTER, COMMA];

  address: Address[] = [
  ];

  add(event: MatChipInputEvent): void {
    const input = event.input;
    const value = event.value;

    // Add our fruit
    if ((value || '').trim()) {
      this.address.push({name: value.trim()});
    }

    // Reset the input value
    if (input) {
      input.value = '';
    }
  }

  remove(address: Address): void {
    const index = this.address.indexOf(address);

    if (index >= 0) {
      this.address.splice(index, 1);
    }
  }


  // tslint:disable-next-line: max-line-length
  constructor(public snackBar: MatSnackBar, public dialog: MatDialog, public commService: CommServiceService, private bottomSheet: MatBottomSheet) { }

  ngOnInit() {
  }

  onComposeEmailSend(emailrecipients: object, emailsubject: string, emailbody: string){
    emailrecipients = this.address;
    if (emailrecipients[0] == '') {
      this.snackBar.open('Enter Atleast one Recipient Email', 'X', {duration: 4000});
      return false;
    }

    if (emailsubject == '') {
      this.snackBar.open('Enter Email Subject', 'X', {duration: 4000});
      return false;
    }

    // Showing Loader
    this.progressLoader = true;

    // Sending Email Compose Data to Comm Service
    this.commService.ComposeEmailSubmit(emailrecipients, emailsubject, emailbody);
    this.commService.getComposeEmailSubmitListener()
        .subscribe((GettingResponse: any) => {
          if (GettingResponse.flag == 'true'){
            this.bottomSheet.dismiss();
            this.snackBar.open('Email Successfully Send', 'X', {duration: 4000});

            this.progressLoader = false;
          } else {
            this.bottomSheet.dismiss();
            this.snackBar.open('Email Server is Currently Offline Try Again After Sometime', 'X', {duration: 4000});

            this.progressLoader = false;
          }
        });




  }// close onCOmposeEmailSend


}// close class



