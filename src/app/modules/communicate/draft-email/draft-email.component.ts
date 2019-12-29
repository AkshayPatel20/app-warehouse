import { Component, OnInit, EventEmitter, Output} from '@angular/core';
import { CommServiceService } from '../comm-service.service';

@Component({
  selector: 'app-draft-email',
  templateUrl: './draft-email.component.html',
  styleUrls: ['./draft-email.component.css']
})
export class DraftEmailComponent implements OnInit {
  DraftEmails = [];

  @Output() DraftCount: EventEmitter<string> = new EventEmitter<string>();

  constructor(public commService: CommServiceService) { }

  ngOnInit() {

    this.commService.FetchingDraftEmail();
    this.commService.getDraftEmailListener()
        .subscribe((GettingResponse) => {
          this.DraftEmails = GettingResponse.draft_Mails;
          this.DraftCount.emit(GettingResponse.draft_Count);
        });

  }

}
