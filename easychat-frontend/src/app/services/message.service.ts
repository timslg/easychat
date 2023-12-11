import { Injectable } from '@angular/core';
import { Observable, catchError, map, throwError } from 'rxjs';
import { UserService } from './user.service';
import { HttpClient } from '@angular/common/http';
import { Message } from '../models/message.model';
import { Socket } from 'ngx-socket-io';
import { environment } from 'src/environments/environment';
import { AlertService } from './alert.service';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  public isConnected = false;

  constructor(private userService : UserService, private http: HttpClient, private socket: Socket, private alertService: AlertService) {
    this.socket.fromEvent('connect').subscribe(() => {
      this.isConnected = true;
    });
    this.socket.fromEvent('disconnect').subscribe(() => {
      this.isConnected = false;
    });
  }

  public get messages(): Observable<Message[]> {
    return this.http.get<Message[]>(`${environment.apiUrl}/messages`).pipe(
      map((messages)=> messages.map((message) => {
        if(message.date) {
          message.date = new Date(message.date);
        }
        return message;
      })),
      catchError(err => {
        console.log(err);
        this.alertService.error('Nachrichten konnten nicht geladen werden.', true);
        return throwError(() => err);
      })
    );
  }

  public sendMessage(content: string) {
    return this.http.post(`${environment.apiUrl}/messages`, {
      username: this.userService.username,
      content: content
    }).pipe(
      catchError(err => {
        console.log(err);
        this.alertService.error('Das Backend konnte nicht erreicht werden.', true);
        return throwError(() => err);
      })
    )
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
