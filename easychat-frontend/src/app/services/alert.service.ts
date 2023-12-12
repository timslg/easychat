import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

/**
 * This service is used to display error alerts within the app.
 */
@Injectable({
  providedIn: 'root'
})
export class AlertService {

  // Subject to manage error alerts with a tuple of [message, fade] format
  private subject = new Subject<[string, boolean]>();

  /**
   * Returns an observable to listen for error alerts.
   * @returns Observable<[string, boolean]> - Tuple containing the error message and fade flag.
   */
  public get alerts(): Observable<[string, boolean]> {
    return this.subject.asObservable();
  }

  /**
   * Displays an error alert.
   * @param message - Error message to be displayed.
   * @param fade - Boolean flag to indicate if the alert should fade after display.
   */
  public error(message: string, fade: boolean): void {
    this.subject.next([message, fade]);
  }

}
