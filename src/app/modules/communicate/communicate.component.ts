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
  // RECIVING DATA FROM SENT CHILD
  sentcount: string;
  draftcount: string;

  constructor(private bottomSheet: MatBottomSheet) { }

  ngOnInit() {
  }

  onsentCountData(data) {
    this.sentcount = data;
  }

  ondraftCountData(data){
    this.draftcount = data;
  }

  // Compose Btn Click
  openEmailBox() {
    this.bottomSheet.open(ComposeBoxComponent, { panelClass: 'bottom-sheet-composebox-container' });
  }// close openEmailBox



}// close Class
