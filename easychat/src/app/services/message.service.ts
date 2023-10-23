import { Injectable } from '@angular/core';
import { Observable, ReplaySubject, Subject, from, of } from 'rxjs';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  // Temporary solution -> Only saves the last 50 messages
  private _messages$ = new ReplaySubject<Record<'content' | 'username', string>>(50);

  constructor(private userService : UserService) { }

  public get messages(): Observable<Record<'content' | 'username', string>> {
    return this._messages$;
  }

  public sendMessage(message: string) {
    if (this.userService.username) {
      this._messages$.next({
        'content': message,
        'username': this.userService.username
      })
    }
  }
}
