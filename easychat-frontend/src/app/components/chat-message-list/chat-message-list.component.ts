import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Message } from 'src/app/models/message.model';
import { MessageService } from 'src/app/services/message.service';

@Component({
  selector: 'app-chat-message-list',
  templateUrl: './chat-message-list.component.html',
  styleUrls: ['./chat-message-list.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ChatMessageListComponent implements OnInit {
  @ViewChild('scrollContainer') private scrollContainer!: ElementRef;

  public messages: Message[] = [];

  constructor(private ref: ChangeDetectorRef, private messageService: MessageService) {
  }

  ngOnInit() {
    this.messageService.messages.subscribe((message: Message[]) => {
      this.messages = message;
      this.ref.detectChanges();
      this.scrollToBottom();
    })
    this.messageService.liveMessages.subscribe((message) => {
      this.messages.push(message);
      this.ref.detectChanges();
      this.scrollToBottom();
    })
  }

  scrollToBottom() {
    this.scrollContainer.nativeElement.scrollTop = this.scrollContainer.nativeElement.scrollHeight;
  }

  onScroll(event: Event) {
    let element = event.currentTarget;
    if (element instanceof Element) {
      if (element.scrollHeight > element.clientHeight) {
        const isScrolledToBottom = element.scrollHeight <= element.clientHeight + element.scrollTop;
        const isScrolledToTop = isScrolledToBottom ? false : element.scrollTop === 0;
        element.classList.toggle('bottom-overflowing', !isScrolledToBottom);
        element.classList.toggle('top-overflowing', !isScrolledToTop);
      }
    }
  }

}