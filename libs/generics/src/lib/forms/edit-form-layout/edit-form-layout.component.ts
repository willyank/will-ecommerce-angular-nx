import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'edit-form-layout',
  templateUrl: './edit-form-layout.component.html',
})
export class EditFormLayoutComponent {
  @Input() formHeaderText: string;
  @Input() subHeaderText: string;
  @Input() saveButtonText = 'Save';
  @Input() form: FormGroup;

  @Output() handleSave: EventEmitter<void> = new EventEmitter<void>();
  @Output() handleCancel: EventEmitter<void> = new EventEmitter<void>();

  canSave(): boolean {
    return this.form.valid && this.form.dirty;
  }

  cancel(): void {
    this.handleCancel.emit();
  }

  save(): void {
    if (this.canSave()) {
      this.handleSave.emit();
    }
  }
}
