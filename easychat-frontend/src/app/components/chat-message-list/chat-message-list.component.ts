import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Subscription } from 'rxjs';
import { Message } from 'src/app/models/message.model';
import { MessageService } from 'src/app/services/message.service';
import { UserService } from 'src/app/services/user.service';

/**
 * Component responsible for rendering the chat messages.
 */
@Component({
  selector: 'app-chat-message-list',
  templateUrl: './chat-message-list.component.html',
  styleUrls: ['./chat-message-list.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ChatMessageListComponent implements OnInit, OnDestroy {
  @ViewChild('scrollContainer') private scrollContainer!: ElementRef;

  // Array of messages that are displayed within the component
  public messages: Message[] = [];

  // Subscriptions
  private messageSubscription!: Subscription;
  private liveMessageSubscription!: Subscription;

  /**
   * Constructor for ChatMessageListComponent.
   * @param ref - The Angular ChangeDetectorRef for manual change detection.
   * @param messageService - The service for managing messages.
   * @param userService - The service for managing user information.
   */
  constructor(
    private ref: ChangeDetectorRef,
    public messageService: MessageService,
    public userService: UserService
  ) {}

  /**
   * Initializes the component and subscribes to message updates.
   */
  public ngOnInit(): void {
    this.messageSubscription = this.messageService.messages.subscribe((message: Message[]) => {
      this.messages = message;
      this.ref.detectChanges();
      this.scrollToBottom();
    })
    this.liveMessageSubscription = this.messageService.liveMessages.subscribe((message) => {
      this.messages.push(message);
      this.ref.detectChanges();
      this.scrollToBottom();
    })
  }

  /**
   * Unsubscribes from the services to prevent memory leaks.
   */
  public ngOnDestroy(): void {
    this.messageSubscription.unsubscribe();
    this.liveMessageSubscription.unsubscribe();
  }

  /**
   * Scrolls to the bottom of the message list when new message is added to array.
   */
  private scrollToBottom(): void {
    this.scrollContainer.nativeElement.scrollTop = this.scrollContainer.nativeElement.scrollHeight;
  }

  /**
   * Handles the scroll event to determine if the chat is scrolled to the top or bottom.
   * This functions add/remove the fade-overlay at the top and bottom of the div to indicate that there are more messages to scroll.
   * @param event - The scroll event.
   */
  public onScroll(event: Event): void {
    let element = event.currentTarget;

    if (element instanceof Element) {
      if (element.scrollHeight > element.clientHeight) {
        const isScrolledToBottom = element.scrollHeight <= element.clientHeight + element.scrollTop;
        const isScrolledToTop = isScrolledToBottom ? false : element.scrollTop === 0;

        // Add or remove classes based on scroll position
        element.classList.toggle('bottom-overflowing', !isScrolledToBottom);
        element.classList.toggle('top-overflowing', !isScrolledToTop);
      }
    }

  }

}
