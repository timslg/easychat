import { Injectable } from '@angular/core';
import { Observable, ReplaySubject, Subject, from, map, of } from 'rxjs';
import { UserService } from './user.service';
import { HttpClient } from '@angular/common/http';
import { Message } from '../models/message.model';
import { Socket } from 'ngx-socket-io';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  // Temporary solution -> Only saves the last 50 messages
  private _messages$ = new ReplaySubject<Record<'content' | 'username', string>>(50);

  constructor(private userService : UserService, private http: HttpClient, private socket: Socket) { }

  public get messages(): Observable<Message[]> {
    return this.http.get<Message[]>('http://localhost:3000/messages').pipe(
      map((messages)=> messages.map((message) => {
        if(message.date) {
          message.date = new Date(message.date);
        }
        return message;
      }))
    );
  }

  public sendMessage(content: string) {
    return this.http.post('http://localhost:3000/messages', {
      username: this.userService.username,
      content: content
    })
  }

  public get liveMessages() {
    return this.socket.fromEvent<Message>('message').pipe(
      map((message) => {
        if(message.date) {
          message.date = new Date(message.date);
        }
        return message;
      })
    );
  }
}
