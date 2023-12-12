import { Injectable } from '@angular/core';
import { Observable, catchError, map, throwError } from 'rxjs';
import { UserService } from './user.service';
import { HttpClient } from '@angular/common/http';
import { Message } from '../models/message.model';
import { Socket } from 'ngx-socket-io';
import { environment } from 'src/environments/environment';
import { AlertService } from './alert.service';

/**
 * Service for managing messages, both retrieving and sending them.
 */
@Injectable({
  providedIn: 'root'
})
export class MessageService {

  public isConnected = false;

  /**
   * Constructor for the MessageService.
   * @param userService - The user service to get user information.
   * @param http - The Angular HttpClient for making HTTP requests.
   * @param socket - The Socket.IO service for real-time communication.
   * @param alertService - The service for displaying alerts.
   */
  constructor(
    private userService : UserService,
    private http: HttpClient,
    private socket: Socket,
    private alertService: AlertService
  ) {
    // Subscribe to Socket.IO events to track connection status
    this.socket.fromEvent('connect').subscribe(() => {
      this.isConnected = true;
    });
    this.socket.fromEvent('disconnect').subscribe(() => {
      this.isConnected = false;
    });
  }

  /**
   * Retrieves messages from the server.
   * @returns Observable array of messages.
   */
  public get messages(): Observable<Message[]> {
    return this.http.get<Message[]>(`${environment.apiUrl}/messages`).pipe(
      map((messages)=> messages.map((message) => {
        // Convert message date to Date object
        if(message.date) {
          message.date = new Date(message.date);
        }
        return message;
      })),
      catchError(err => {
        // Handle errors and display alert
        console.log(err);
        this.alertService.error('Nachrichten konnten nicht geladen werden.', true);
        return throwError(() => err);
      })
    );
  }

  /**
   * Sends a new message to the server.
   * @param content - The content of the message.
   * @returns Observable for the HTTP request.
   */
  public sendMessage(content: string): Observable<{}> {
    return this.http.post(`${environment.apiUrl}/messages`, {
      username: this.userService.username,
      content: content
    }).pipe(
      catchError(err => {
        // Handle errors and display alert
        console.log(err);
        this.alertService.error('Das Backend konnte nicht erreicht werden.', true);
        return throwError(() => err);
      })
    );
  }

  /**
   * Gets live messages through Socket.IO.
   * @returns Observable for live messages.
   */
  public get liveMessages(): Observable<Message> {
    return this.socket.fromEvent<Message>('message').pipe(
      map((message) => {
        // Convert message date to Date object
        if(message.date) {
          message.date = new Date(message.date);
        }
        return message;
      })
    );
  }

}
