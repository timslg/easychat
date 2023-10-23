import { Injectable } from '@angular/core';
import { Observable, Subject, from, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  private _messages$ = new Subject<Record<'content', string>>();

  constructor() { }

  public get messages(): Observable<Record<'content', string>> {
    return this._messages$;
  }

  sendMessage(message: string) {
    this._messages$.next({'content': message})
  }
}
