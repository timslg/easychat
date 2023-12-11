import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AlertService } from 'src/app/services/alert.service';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.css']
})
export class AlertComponent implements OnInit, OnDestroy {

  alerts: string[] = [];
  alertSubscription!: Subscription;

  constructor(private alertService: AlertService) {}

  ngOnInit(): void {
    this.alertSubscription = this.alertService.alerts.subscribe((alert) => {
      this.alerts.push(alert[0]);
      if(alert[1]) {
        setTimeout(() => {
          this.alerts = this.alerts.filter(x => x !== alert[0]);
        }, 3000);
      }
    })
  }

  ngOnDestroy(): void {
    this.alertSubscription.unsubscribe();
  }

}
