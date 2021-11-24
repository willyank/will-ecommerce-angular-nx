import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { BaseModel } from '../models/base.model';
import { BaseCrudService } from '../services/base-crud.service';
import { AbstractFormValidation } from './abstract-form-validation';

@Component({
  template: '<div></div>',
})
export abstract class AbstractEditForm<
  T extends BaseModel
> extends AbstractFormValidation {
  obj: T;

  constructor(
    protected router: Router,
    protected activatedRoute: ActivatedRoute,
    protected baseCrudService: BaseCrudService<T>
  ) {
    super();
    this.obj = this.activatedRoute.snapshot.data.editObject ?? {};
  }

  save(): void {
    this.baseCrudService.save(this.obj).subscribe({
      next: (res) => console.log(res),
      error: (err) => console.error(err),
    });
  }

  cancel(): void {
    const route = this.obj.id ? '../../' : '../';
    this.router.navigate([route], { relativeTo: this.activatedRoute });
  }
}
