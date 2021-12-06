import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditServiceResolver } from '@willyan-company/generics';

import { CategoriesListComponent } from './categories-list.component';
import { CategoriesFormComponent } from './pages/categories-form/categories-form.component';

const routes: Routes = [
  {
    path: '',
    component: CategoriesListComponent,
  },
  {
    path: 'new',
    component: CategoriesFormComponent,
  },
  {
    path: 'edit/:id',
    component: CategoriesFormComponent,
    resolve: { editObject: EditServiceResolver },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CategoriesListRoutingModule {}
