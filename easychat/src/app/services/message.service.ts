import { Message } from './../models/message';

import { Injectable } from '@angular/core';
import { Observable, ReplaySubject, Subject, from, of } from 'rxjs';
import { UserService } from './user.service';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class MessageService {






  constructor(private userService : UserService, private http: HttpClient) { }

  public get messages(): Observable< Message []> {
    return this.http.get<Message[]>('http://localhost:3000/history');
  }

  public sendMessage(content: string) {

     const message:Message = {
      content: content,
      username: this.userService.username || 'test'

     }
      return this.http.post<Message[]>('http://localhost:3000/history', message)
        //.subscribe((updatedMessages) => {
          // Handle the updated messages here
          // For example, you can emit the updated list of messages using ReplaySubject
          //this._messages$.next(updatedMessages);
       // }, (error) => {
          // Handle any errors here
        //  console.error('Error sending message', error);
       // });

  }
}
