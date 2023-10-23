import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MessageService } from 'src/app/services/message.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-chat-input',
  templateUrl: './chat-input.component.html',
  styleUrls: ['./chat-input.component.css']
})
export class ChatInputComponent {
  messageForm = new FormGroup({
    message: new FormControl('')
  });

  constructor(private messageService: MessageService, public userService: UserService) {

  }

  onSubmit() {
    const message = this.messageForm.controls.message.value;
    
    if(message) {
      this.messageService.sendMessage(message);
      this.messageForm.reset();
    }

  }

  onKeyPress(event: KeyboardEvent) {
    if (event.key === 'Enter' && !event.shiftKey) {
      event.preventDefault()
      this.onSubmit()
    }
  }
}
