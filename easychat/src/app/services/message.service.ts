import { Injectable } from '@angular/core';
import { Observable, ReplaySubject, Subject, from, of } from 'rxjs';
import { UserService } from './user.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  // Temporary solution -> Only saves the last 50 messages
  private _messages$ = new ReplaySubject<Record<'content' | 'username' | 'timestamp', string>>(50);

  constructor(private userService : UserService, private http: HttpClient) { }

  public get messages(): Observable<Record<'content' | 'username' | 'timestamp', string>[]> {
    return this.http.get<Record<'content' | 'username' | 'timestamp', string>[]>('http://localhost:3000/history');
  }

  public sendMessage(message: string) {
    if (this.userService.username) {
      this._messages$.next({
        'content': message,
        'username': this.userService.username,
        'timestamp': 'DATE PLACEHOLDER',
      })
    }
  }
}
