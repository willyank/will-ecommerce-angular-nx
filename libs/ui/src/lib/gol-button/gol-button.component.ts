import { Component, ElementRef, Input, ViewChild } from '@angular/core';

@Component({
  selector: 'gol-button',
  templateUrl: './gol-button.component.html',
  styleUrls: ['./gol-button.component.styl'],
})
export class GolButtonComponent {
  @ViewChild('button') button: ElementRef;

  @Input() onClick: Function;

  @Input() customClass = '';

  @Input() id = '';

  @Input() isLower = false;

  @Input() loading = false;

  @Input() isBlock = false;

  @Input() isJust = false;

  @Input() isDisabled = false;

  @Input() isDisabledOpacity = false;

  @Input() isButtonOrange = false;

  @Input() isBright = false;

  @Input() mobileFull = false;

  @Input() isTransparent = false;

  @Input() isBgTransparent = false;

  @Input() type = 'button';

  classLoading = false;

  clickLoad(): void {
    this.classLoading = true;
    setTimeout(() => {
      this.successLoad();
    }, 3000);
  }

  successLoad(): void {
    this.classLoading = false;
    this.button.nativeElement.blur();
  }
}
