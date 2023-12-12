import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AlertService } from 'src/app/services/alert.service';

/**
 * Component responsible for displaying alerts within the application.
 */
@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.css']
})
export class AlertComponent implements OnInit, OnDestroy {

  alerts: string[] = [];
  alertSubscription!: Subscription;

  /**
   * Constructor for AlertComponent.
   * @param alertService - The service for managing alerts.
   */
  constructor(
    private alertService: AlertService
  ) {}

  /**
   * Initializes the component and subscribes to the alert service.
   */
  public ngOnInit(): void {
    this.alertSubscription = this.alertService.alerts.subscribe((alert) => {
      this.alerts.push(alert[0]);

      // Remove the alert after 3000 milliseconds (3 seconds) if the fade flag is true
      if(alert[1]) {
        setTimeout(() => {
          this.alerts = this.alerts.filter(x => x !== alert[0]);
        }, 3000);
      }
    });
  }

  /**
   * Unsubscribes from the alert service to prevent memory leaks.
   */
  public ngOnDestroy(): void {
    this.alertSubscription.unsubscribe();
  }

}
