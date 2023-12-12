import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MessageService } from 'src/app/services/message.service';
import { UserService } from 'src/app/services/user.service';

/**
 * Component responsible for rendering the chat input interface.
 */
@Component({
  selector: 'app-chat-input',
  templateUrl: './chat-input.component.html',
  styleUrls: ['./chat-input.component.css']
})
export class ChatInputComponent {

  /**
   * Form group for the chat input.
   */
  messageForm = new FormGroup({
    message: new FormControl('')
  });

  /**
   * Constructor for ChatInputComponent.
   * @param messageService - The service for managing messages.
   * @param userService - The service for managing user information.
   */
  constructor(
    private messageService: MessageService,
    public userService: UserService
  ) {}

  /**
   * Handles the form submission to send a message.
   */
  public onSubmit(): void {
    const message = this.messageForm.controls.message.value;
    
    if(message) {
      this.messageService.sendMessage(message).subscribe();
      this.messageForm.reset();
    }

  }

  /**
   * Handles key press events, preventing the default action for Enter key and submitting the form.
   * @param event - The KeyboardEvent triggered by a key press.
   */
  public onKeyPress(event: KeyboardEvent): void {
    if (event.key === 'Enter' && !event.shiftKey) {
      event.preventDefault()
      if(this.messageForm.controls.message.value && this.userService.username) {
        this.onSubmit()
      }
    }
  }
  
}
