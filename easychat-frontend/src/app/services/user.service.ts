import { Injectable } from '@angular/core';
import { LocalStorageService } from './local-storage.service';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { catchError, throwError } from 'rxjs';
import { AlertService } from './alert.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private _username : string | undefined;

  constructor(private localStorage: LocalStorageService, private http: HttpClient, private alertService: AlertService) {
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

  public get users() {
    return this.http.get<{[username: string] : number}>(`${environment.apiUrl}/users`).pipe(
      catchError(err => {
        console.log(err);
        this.alertService.error('Das Leaderboard konnte nicht geladen werden.', true);
        return throwError(() => err);
      })
    );
  }

}
