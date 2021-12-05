import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'list-layout',
  templateUrl: './list-layout.component.html',
})
export class ListLayoutComponent {
  @Input() headerText: string;
  @Input() subHeaderText: string;

  @Output() handleNew: EventEmitter<void> = new EventEmitter<void>();

  new(): void {
    this.handleNew.emit();
  }
}
