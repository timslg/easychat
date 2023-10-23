import { Injectable } from '@angular/core';
import { Observable, Subject, from, of } from 'rxjs';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  private _messages$ = new Subject<Record<'content' | 'username', string>>();

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
