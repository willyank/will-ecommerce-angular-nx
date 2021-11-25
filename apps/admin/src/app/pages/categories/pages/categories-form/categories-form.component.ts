import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AbstractEditForm, commonMessages, PrimengMessageService } from '@willyan-company/generics';
import { CategoriesService, Category } from '@willyan-company/products';

@Component({
  selector: 'admin-categories',
  templateUrl: './categories-form.component.html',
})
export class CategoriesFormComponent
  extends AbstractEditForm<Category>
  implements OnInit
{
  constructor(
    protected categoriesService: CategoriesService,
    protected router: Router,
    protected activatedRoute: ActivatedRoute,
    protected messageService: PrimengMessageService,
    private fb: FormBuilder
  ) {
    super(router, activatedRoute, messageService, categoriesService);
    this.initializeValidationMessagem();
  }

  ngOnInit(): void {
    this.initializeForm();
  }

  protected initializeForm(): void {
    this.form = this.fb.group({
      name: [this.obj.name, [Validators.required]],
      icon: [this.obj.icon, [Validators.required]],
      color: [this.obj.color ?? '#fff'],
    });
  }
  protected initializeValidationMessagem(): void {
    const validationMessages: Record<string, unknown> = {
      name: {
        required: commonMessages.inputRequired,
      },
      icon: {
        required: commonMessages.inputRequired,
      },
    };

    super.configureValidationMessage(validationMessages);
  }
}
