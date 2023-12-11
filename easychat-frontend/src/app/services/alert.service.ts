import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AlertService {

  private subject = new Subject<[string, boolean]>();

  constructor() { }

  get alerts() {
    return this.subject.asObservable();
  }

  error(message: string, fade: boolean) {
    this.subject.next([message, fade]);
  }

}
