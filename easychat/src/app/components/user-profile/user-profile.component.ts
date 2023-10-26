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

  public onSubmit(username: string) : void {
    this.userService.setUsername(username);
    this.username = '';
  }

  public onKeyPress(event: KeyboardEvent) : void {
    if (event.key === 'Enter' && !event.shiftKey) {
      event.preventDefault()
      if(this.username) {
        this.onSubmit(this.username);
      }
    }
  }

}
