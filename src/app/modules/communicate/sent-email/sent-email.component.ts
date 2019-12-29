import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { CommServiceService } from '../comm-service.service';

@Component({
  selector: 'app-sent-email',
  templateUrl: './sent-email.component.html',
  styleUrls: ['./sent-email.component.css']
})
export class SentEmailComponent implements OnInit {

  SentEmails = [];

  @Output() SentCount: EventEmitter<string> = new EventEmitter<string>();

  constructor(public commService: CommServiceService) { }

  ngOnInit() {
  // Fetching Send Emails
    this.commService.FetchingSendEmail();
    this.commService.getSendEmailListener()
        .subscribe((GettingResponse) => {
          this.SentEmails = GettingResponse.send_Mails;
          this.SentCount.emit(GettingResponse.send_Count);
        });

  }


}
