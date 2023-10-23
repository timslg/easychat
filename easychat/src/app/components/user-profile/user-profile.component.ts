import { Component } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent {

  public username : string = '';

  constructor(public userService: UserService) {
    
  }

  public onSubmit(username: string) {
    this.userService.setUsername(username);
    this.username = '';
  }

}
