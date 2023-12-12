import { Directive, ElementRef, HostListener } from '@angular/core';

/**
 * Directive to automatically resize a textarea based on its content.
 */
@Directive({
  selector: '[appTextareaAutoresize]'
})
export class TextareaAutoresizeDirective {

  constructor(
    private elementRef: ElementRef
  ) { }

  /**
   * HostListener for the 'input' event to trigger resizing when the textarea content changes.
   */
  @HostListener('ngModelChange')
  onInput() {
    this.resize();
  }

  /**
   * Resize the textarea based on its content.
   */
  resize() {
    this.elementRef.nativeElement.rows = Math.min(this.elementRef.nativeElement.value.split(/\r\n|\r|\n/).length, 4);
  }

}
