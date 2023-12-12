import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

/**
 * Component responsible for rendering the user profile interface.
 */
@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent {

  public username : string = '';

  /**
   * Constructor for UserProfileComponent.
   * @param userService - The service for managing user information.
   * @param router - The Angular router for navigating between routes.
   */
  constructor(
    public userService: UserService,
    public router: Router
  ) {}

  /**
   * Handles form submission to set the user's username.
   * @param username - The entered username from the form.
   */
  public onSubmit(username: string) : void {
    this.userService.setUsername(username);
    this.username = '';
    this.router.navigate(['/'])
  }

  /**
   * Handles key press events, preventing the default action for Enter key and submitting the form.
   * @param event - The KeyboardEvent triggered by a key press.
   */
  public onKeyPress(event: KeyboardEvent) : void {
    if (event.key === 'Enter' && !event.shiftKey) {
      event.preventDefault()
      if(this.username) {
        this.onSubmit(this.username);
      }
    }
  }

}
