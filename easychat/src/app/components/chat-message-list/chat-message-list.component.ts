import { AfterViewChecked, Component, ElementRef, ViewChild } from '@angular/core';
import { MessageService } from 'src/app/services/message.service';

@Component({
  selector: 'app-chat-message-list',
  templateUrl: './chat-message-list.component.html',
  styleUrls: ['./chat-message-list.component.css']
})
export class ChatMessageListComponent implements AfterViewChecked {
  @ViewChild('scrollContainer') private scrollContainer!: ElementRef;

  messageList = this.messageService.messageList;

  constructor(private messageService: MessageService) {
  }

  // FIX: Optimize onChangeStrategy
  ngAfterViewChecked() {
    this.scrollToBottom();
  }

  scrollToBottom() {
    this.scrollContainer.nativeElement.scrollTop = this.scrollContainer.nativeElement.scrollHeight;
  }
}
