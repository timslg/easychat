import { Injectable } from '@angular/core';
import { Observable, ReplaySubject, Subject, from, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  // Temporary solution -> Only saves the last 50 messages
  private _messages$ = new ReplaySubject<Record<'content', string>>(50);

  constructor() { }

  public get messages(): Observable<Record<'content', string>> {
    return this._messages$;
  }

  sendMessage(message: string) {
    this._messages$.next({'content': message})
  }
}
