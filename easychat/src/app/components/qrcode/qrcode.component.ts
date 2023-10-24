import { Component, OnInit } from '@angular/core';
import { HostnameService } from 'src/app/services/hostname.service';
import { WINDOW_PROVIDERS } from 'src/app/window.providers';

@Component({
  selector: 'app-qrcode',
  templateUrl: './qrcode.component.html',
  styleUrls: ['./qrcode.component.css'],
  providers: [ WINDOW_PROVIDERS, HostnameService ],
})
export class QrcodeComponent implements OnInit {
  constructor(private hostnameService: HostnameService) {}

  hostName: string = '';

  ngOnInit(): void {
    this.hostName = `http://${this.hostnameService.getHostname()}/`;
  }

}
