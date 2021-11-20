import { error } from '@angular/compiler/src/util';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BaseCrudService } from '@willyan-company/generics';

import { AbstractFormValidation } from './abstract-form-validation';

@Component({
  template: '<div></div>',
})
export abstract class AbstractEditForm<T> extends AbstractFormValidation {
  obj: T;
  constructor(
    protected activatedRoute: ActivatedRoute,
    protected baseCrudService: BaseCrudService<T>
  ) {
    super();
    this.obj = this.activatedRoute.snapshot.data.editObject ?? {};
  }

  save(): void {
    debugger;
    this.baseCrudService.save(this.obj).subscribe({
      next: (res) => console.log(res),
      error: (err) => console.error(err),
    });
  }
}
