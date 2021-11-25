import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'edit-form-layout',
  templateUrl: './edit-form-layout.component.html',
})
export class EditFormLayoutComponent {
  @Input() formHeaderText: string;
  @Input() subHeaderText: string;
  @Input() saveButtonText = 'Save';

  @Output() handleSave: EventEmitter<void> = new EventEmitter<void>();
  @Output() handleCancel: EventEmitter<void> = new EventEmitter<void>();

  cancel(): void {
    this.handleCancel.emit();
  }

  save(): void {
    this.handleSave.emit();
  }
}
