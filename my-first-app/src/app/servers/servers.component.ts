///<reference path="../../../node_modules/@angular/core/src/metadata/directives.d.ts"/>
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreationStatus = 'No server was created!';
  flag = false;
  serverName = '';

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }

  ngOnInit() {
  }
  onCreateServer() {
    this.flag = !this.flag;
    if (this.flag) {
      this.serverCreationStatus = 'Server was created!';
    } else {
      this.serverCreationStatus = 'No server was created';
    }
  }

  onUpdateServerName(event: string) {
    console.log(event);
    this.serverName = (<HTMLInputElement>event.target).value;
  }
}
