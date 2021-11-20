import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AbstractEditForm } from '@willyan-company/generics';
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
    private fb: FormBuilder
  ) {
    super(activatedRoute, categoriesService);
    this.initializeValidationMessagem();
  }

  ngOnInit(): void {
    this.initializeForm();
  }

  protected initializeForm(): void {
    this.form = this.fb.group({
      name: ['', [Validators.required]],
      icon: ['', [Validators.required]],
    });
  }
  protected initializeValidationMessagem(): void {
    const validationMessages: Record<string, unknown> = {
      name: {
        required: 'Required field',
      },
      icon: {
        required: 'Required field',
      },
    };

    super.configureValidationMessage(validationMessages);
  }
}
