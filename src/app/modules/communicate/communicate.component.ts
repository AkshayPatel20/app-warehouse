import { Component, OnInit } from '@angular/core';
import { MatBottomSheet } from '@angular/material';
import { ComposeBoxComponent } from './compose-box/compose-box.component';
import { SigninComponent } from '../../auth/signin/signin.component';

@Component({
  selector: 'app-communicate',
  templateUrl: './communicate.component.html',
  styleUrls: ['./communicate.component.css']
})
export class CommunicateComponent implements OnInit {

  constructor(private bottomSheet: MatBottomSheet) { }

  ngOnInit() {
  }

  // Compose Btn Click
  openEmailBox() {
    this.bottomSheet.open(ComposeBoxComponent, { panelClass: 'bottom-sheet-composebox-container' });
  }// close openEmailBox

}// close Class
