import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private _username : string | undefined;

  constructor() { }

  public get username() : string | undefined {
    return this._username;
  }

  public setUsername(username: string) {
    this._username = username;
  }

}
