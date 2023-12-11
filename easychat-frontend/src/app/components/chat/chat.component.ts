import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { ChatInputComponent } from '../chat-input/chat-input.component';
import { MessageService } from 'src/app/services/message.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent {

  constructor (public messageService: MessageService) {}

}
