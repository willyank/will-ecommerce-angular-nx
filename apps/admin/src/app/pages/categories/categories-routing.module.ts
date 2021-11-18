import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListServiceResolver } from '@willyan-company/generics';
import { CategoriesListComponent } from './categories-list.component';

const routes: Routes = [
  {
    path: '',
    component: CategoriesListComponent,
    resolve: { list: ListServiceResolver },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CategoriesListRoutingModule {}
