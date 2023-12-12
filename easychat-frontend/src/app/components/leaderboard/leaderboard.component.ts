import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-leaderboard',
  templateUrl: './leaderboard.component.html',
  styleUrls: ['./leaderboard.component.css']
})
export class LeaderboardComponent implements OnInit {

  constructor(private userService: UserService) {}

  public users: any[][] = [];

  ngOnInit() {
    this.userService.users.subscribe((users: {[username: string] : number}) => {
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

  get totalMessageCount() {
    let sum = 0;
    this.users.forEach((value) => {
      sum += value[1];
    });
    console.log(sum)
    return sum;
  }

}
