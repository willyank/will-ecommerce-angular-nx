import { Location } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { BaseModel } from '../models/base.model';
import { BaseCrudService } from '../services/base-crud.service';
import { PrimengMessageService } from '../services/primeng-messages.service';
import { AbstractFormValidation } from './abstract-form-validation';

@Component({
  template: '<div></div>',
})
export abstract class AbstractEditForm<
  T extends BaseModel
> extends AbstractFormValidation {
  obj: T;

  constructor(
    protected location: Location,
    protected activatedRoute: ActivatedRoute,
    protected messageService: PrimengMessageService,
    protected baseCrudService: BaseCrudService<T>
  ) {
    super();
    this.obj = this.activatedRoute.snapshot.data.editObject ?? {};
  }

  save(): void {
    const toSave: T = {
      ...this.form.getRawValue(),
      id: this.obj.id,
    };

    this.baseCrudService.save(toSave).subscribe({
      next: (result) => {
        if (result) {
          if (!this.obj.id) {
            this.obj.id = result;
          }
          this.messageService.success(
            `${this.obj.id ? 'Edited' : 'Created'} with success!`
          );
        } else {
          this.messageService.warning(
            `${this.obj.id ? 'Edition' : 'Creation'} failed!`
          );
        }
      },
      error: (err) => {
        this.messageService.error(
          `${this.obj.id ? 'Edition' : 'Creation'} failed!`
        );

        const errors = err.error?.errors;
        if (errors) {
          for (const key in errors) {
            const errorMsg = errors[key].join('\r\n');

            this.messageService.error(errorMsg, 15000);
          }
        }
        console.error(err);
      },
    });
  }

  cancel(): void {
    this.location.back();
  }
}
