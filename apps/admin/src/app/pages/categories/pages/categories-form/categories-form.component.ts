import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
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
    protected location: Location,
    protected activatedRoute: ActivatedRoute,
    protected messageService: PrimengMessageService,
    private fb: FormBuilder
  ) {
    super(location, activatedRoute, messageService, categoriesService);
    this.initializeValidationMessagem();
  }

  ngOnInit(): void {
    this.initializeForm();
  }

  protected initializeForm(): void {
    this.form = this.fb.group({
      name: [this.obj.name, [Validators.required]],
      icon: [this.obj.icon, [Validators.required]],
      color: [this.obj.color ?? '#000'],
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
