import { Injectable } from '@angular/core';
import { LocalStorageService } from './local-storage.service';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable, catchError, throwError } from 'rxjs';
import { AlertService } from './alert.service';

/**
 * Service for managing user-related functionality, such as username and leaderboard.
 */
@Injectable({
  providedIn: 'root'
})
export class UserService {

  private _username : string | undefined;

  /**
   * Constructor for the UserService.
   * @param localStorage - The service for managing data in local storage.
   * @param http - The Angular HttpClient for making HTTP requests.
   * @param alertService - The service for displaying alerts.
   */
  constructor(
    private localStorage: LocalStorageService,
    private http: HttpClient,
    private alertService: AlertService
  ) {
    // Retrieve stored username from local storage during initialization
    let stored_username = localStorage.getData('username');
    if(stored_username) {
      this._username = stored_username;
    }
  }

  /**
   * Gets the current username.
   * @returns The current username or undefined if not set.
   */
  public get username() : string | undefined {
    return this._username;
  }

  /**
   * Sets the username and saves it to local storage.
   * @param username - The new username to be set.
   */
  public setUsername(username: string): void {
    this._username = username;
    this.localStorage.saveData('username', username);
  }

  /**
   * Retrieves user data for the leaderboard.
   * @returns Observable with user data for the leaderboard.
   */
  public get users(): Observable<{[username: string] : number}> {
    return this.http.get<{[username: string] : number}>(`${environment.apiUrl}/users`).pipe(
      catchError(err => {
        // Handle errors and display alert
        console.log(err);
        this.alertService.error('Das Leaderboard konnte nicht geladen werden.', true);
        return throwError(() => err);
      })
    );
  }

}