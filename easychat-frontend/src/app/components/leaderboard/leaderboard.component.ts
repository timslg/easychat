import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { UserService } from 'src/app/services/user.service';

/**
 * Component responsible for rendering the leaderboard interface.
 */
@Component({
  selector: 'app-leaderboard',
  templateUrl: './leaderboard.component.html',
  styleUrls: ['./leaderboard.component.css']
})
export class LeaderboardComponent implements OnInit, OnDestroy {

  // Array to store the sorted user data.
  public users: any[][] = [];

  // Subscriptions
  private leaderboardSubscription!: Subscription;

  /**
   * Constructor for LeaderboardComponent.
   * @param userService - The service for managing user information.
   */
  constructor(
    private userService: UserService
  ) {}

  /**
   * Initializes the component and subscribes to user updates.
   */
  ngOnInit(): void {
    this.leaderboardSubscription = this.userService.users.subscribe((users: {[username: string] : number}) => {
      // Sorts the users in an array
      var keyValues = []
      for (var key in users) {
        keyValues.push([ key, users[key] ])
      }
      keyValues.sort(function compare(kv1, kv2) {
        return (kv2[1] as number) - (kv1[1] as number);
      });
      this.users = keyValues;
    });
  }

  /**
   * Unsubscribes from the services to prevent memory leaks.
   */
  public ngOnDestroy(): void {
    this.leaderboardSubscription.unsubscribe();
  }

  /**
   * Gets the total message count from all users.
   * @returns The total message count.
   */
  public get totalMessageCount(): number {
    let sum = 0;
    this.users.forEach((value) => {
      sum += value[1];
    });
    return sum;
  }

}
