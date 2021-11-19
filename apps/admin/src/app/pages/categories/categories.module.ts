import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EditServiceResolver, ListServiceResolver } from '@willyan-company/generics';
import { CategoriesService } from '@willyan-company/products';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { TableModule } from 'primeng/table';
import { ToolbarModule } from 'primeng/toolbar';

import { CategoriesListComponent } from './categories-list.component';
import { CategoriesListRoutingModule } from './categories-routing.module';
import { CategoriesFormComponent } from './pages/categories-form/categories-form.component';

@NgModule({
  declarations: [CategoriesListComponent, CategoriesFormComponent],
  imports: [
    CommonModule,
    // Routing Module
    CategoriesListRoutingModule,

    //primeng
    CardModule,
    ToolbarModule,
    TableModule,
    ButtonModule,
  ],
  providers: [
    {
      provide: 'baseCrudService',
      useFactory: (catService: CategoriesService) => catService,
      deps: [CategoriesService],
    },
    ListServiceResolver,
    EditServiceResolver,
  ],
})
export class CategoriesModule {}
