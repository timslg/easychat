import { Injectable } from '@angular/core';
import { LocalStorageService } from './local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private _username : string | undefined;

  constructor(private localStorage: LocalStorageService) {
    let stored_username = localStorage.getData('username');
    if(stored_username) {
      this._username = stored_username;
    }
  }

  public get username() : string | undefined {
    return this._username;
  }

  public setUsername(username: string) {
    this._username = username;
    this.localStorage.saveData('username', username);
  }

}
