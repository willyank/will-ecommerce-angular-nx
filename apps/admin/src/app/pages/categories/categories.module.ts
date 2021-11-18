import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ListServiceResolver } from '@willyan-company/generics';
import { CategoriesService } from '@willyan-company/products';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { TableModule } from 'primeng/table';
import { ToolbarModule } from 'primeng/toolbar';
import { CategoriesListComponent } from './categories-list.component';
import { CategoriesListRoutingModule } from './categories-routing.module';

@NgModule({
  declarations: [CategoriesListComponent],
  imports: [
    // Routing Module
    CategoriesListRoutingModule,

    //primeng
    CardModule,
    ToolbarModule,
    TableModule,
    ButtonModule,
  ],
  exports: [CategoriesListComponent],
  providers: [
    {
      provide: 'baseCrudService',
      useFactory: (catService: CategoriesService) => catService,
      deps: [CategoriesService],
    },
    ListServiceResolver,
  ],
})
export class CategoriesModule {}
