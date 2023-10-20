import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  private _messageList = Array<Record<'content', string>>();
  readonly messageList = this._messageList;

  constructor() { }

  sendMessage(message: string) {
    this._messageList.push({
      'content': message
    })
  }
}
