import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { UserService } from './user.service';
import { HttpClient } from '@angular/common/http';
import { Message } from '../models/message.model';
import { Socket } from 'ngx-socket-io';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  constructor(private userService : UserService, private http: HttpClient, private socket: Socket) { }

  public get messages(): Observable<Message[]> {
    return this.http.get<Message[]>(`${environment.apiUrl}/messages`).pipe(
      map((messages)=> messages.map((message) => {
        if(message.date) {
          message.date = new Date(message.date);
        }
        return message;
      }))
    );
  }

  public sendMessage(content: string) {
    return this.http.post(`${environment.apiUrl}/messages`, {
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
