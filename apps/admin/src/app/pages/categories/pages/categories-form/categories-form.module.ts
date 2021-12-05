import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import {
  EditFormLayoutModule,
  EditServiceResolver,
} from '@willyan-company/generics';
import { CategoriesService } from '@willyan-company/products';
import { ColorPickerModule } from 'primeng/colorpicker';
import { InputTextModule } from 'primeng/inputtext';

import { CategoriesFormComponent } from './categories-form.component';

@NgModule({
  declarations: [CategoriesFormComponent],
  imports: [
    CommonModule,
    // Routing Module
    ReactiveFormsModule,

    //primeng
    ColorPickerModule,
    InputTextModule,

    EditFormLayoutModule,
  ],
  providers: [
    {
      provide: 'baseCrudService',
      useFactory: (catService: CategoriesService) => catService,
      deps: [CategoriesService],
    },
    EditServiceResolver,
  ],
})
export class CategoriesFormModule {}
