import { Component, OnInit } from '@angular/core';
import { ConnectionService } from 'ng-connection-service';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app-warehouse';

  status = 'ONLINE';
  isConnected = true;

  constructor(private connectionService: ConnectionService, public snackBar: MatSnackBar) {
  }

  ngOnInit() {
    this.connectionService.monitor().subscribe(isConnected => {
      this.isConnected = isConnected;
      if (this.isConnected) {
        this.status = 'ONLINE';
        this.snackBar.open('Internet Connected!', 'X', {duration: 10000});
      } else {
        this.status = 'OFFLINE';
        this.snackBar.open('Internet Not Working', 'X', {duration: 10000});
      }
    });
  }

}// close App Components
