import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appTextareaAutoresize]'
})
export class TextareaAutoresizeDirective {

  constructor(private elementRef: ElementRef) { }

  @HostListener('ngModelChange')
  onInput() {
    this.resize();
  }

  resize() {
    this.elementRef.nativeElement.rows = Math.min(this.elementRef.nativeElement.value.split(/\r\n|\r|\n/).length, 4)
  }

}
