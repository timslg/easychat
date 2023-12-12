import { Component } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

/**
 * Component responsible for rendering the application header.
 */
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  /**
   * Constructor for HeaderComponent.
   * @param userService - The service for managing user information.
   */
  constructor(
    public userService: UserService
  ) {}

}
