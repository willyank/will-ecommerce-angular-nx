import { AfterViewInit, Component, ElementRef, ViewChildren } from '@angular/core';
import { AbstractControl, FormControlName, FormGroup, ValidationErrors } from '@angular/forms';
import { fromEvent, merge, Observable, Subject } from 'rxjs';

interface DisplayMessage {
  [key: string]: string;
}

@Component({
  template: '<div></div>',
})
export abstract class AbstractFormValidation implements AfterViewInit {
  @ViewChildren(FormControlName, { read: ElementRef })
  formInputElements: ElementRef[];

  form: FormGroup;

  private _displayMessage: DisplayMessage = {};
  private _formValidationProcess: IFormValidationProcess;
  private _validationMessages: Record<string, unknown>;

  get displayMessage(): DisplayMessage {
    return this._displayMessage;
  }

  get validationMessages(): Record<string, unknown> {
    return this._validationMessages;
  }

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.validation(this.form);
      this.configureValidation();
    }, 1);
  }

  protected dispose$ = new Subject<void>();

  protected abstract initializeForm(): void;

  protected abstract initializeValidationMessagem(): void;

  protected configureValidationMessage(
    validationMessages: Record<string, unknown>
  ): void {
    this._validationMessages = validationMessages;
    this._formValidationProcess = new FormValidationProcess(validationMessages);
  }

  protected configureValidation(): void {
    const controlBlurs: Observable<unknown>[] = this.formInputElements.map(
      (formControl) => fromEvent(formControl.nativeElement, 'blur')
    );

    const controlKeyUp: Observable<unknown>[] = this.formInputElements.map(
      (formControl) => fromEvent(formControl.nativeElement, 'keyup')
    );

    merge(...controlBlurs).subscribe(() => this.validation(this.form));
    merge(...controlKeyUp).subscribe(() => this.validation(this.form));
  }

  protected validation(formGroup: FormGroup): void {
    this._displayMessage = this._formValidationProcess.process(formGroup);
  }

  protected dispose(): void {
    this.dispose$.next(void 0);
    this.dispose$.complete();
  }

  protected next(): void {
    this.dispose$.next(void 0);
  }

  protected changeControl(
    control: AbstractControl,
    patchValue: string,
    validators?: ((control: AbstractControl) => ValidationErrors | null)[]
  ): void {
    control.patchValue(patchValue);

    if (validators) {
      if (validators.length) control.setValidators(validators);
      else control.clearValidators();
    }

    control.markAsUntouched();
    control.markAsPristine();
    control.updateValueAndValidity();
  }
}

interface IFormValidationProcess {
  process(container: FormGroup): DisplayMessage;
}
class FormValidationProcess implements IFormValidationProcess {
  constructor(private validationMessage: Record<string, any>) {}

  process(container: FormGroup): DisplayMessage {
    const messages: DisplayMessage = {};
    for (const control in container.controls) {
      if (container.controls.hasOwnProperty(control)) {
        const abstractControl = container.controls[control];

        if (abstractControl instanceof FormGroup) {
          Object.assign(messages, this.process(abstractControl));
        } else if (this.validationMessage[control]) {
          messages[control] = '';
          if (
            (abstractControl.dirty || abstractControl.touched) &&
            abstractControl.errors
          ) {
            Object.keys(abstractControl.errors).map((messageKey: string) => {
              const translateKey = this.validationMessage[control][messageKey];
              if (translateKey) {
                if (translateKey.includes(':')) {
                  const interpolateParams = translateKey
                    .substring(translateKey.indexOf(':') + 1)
                    .trim();
                  messages[control] += `${interpolateParams}<br />`;
                } else {
                  messages[control] += `${translateKey}<br />`;
                }
              }
            });
          }
        }
      }
    }

    return messages;
  }
}
