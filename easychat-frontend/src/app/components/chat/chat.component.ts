import { Component } from '@angular/core';
import { MessageService } from 'src/app/services/message.service';

/**
 * Component responsible for rendering the chat interface.
 */
@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent {

  /**
   * Constructor for ChatComponent.
   * @param messageService - The service for managing messages.
   */
  constructor(
    public messageService: MessageService
  ) {}

}
