import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { LayoutDefaultModule } from './shared/layouts/layouts.module';
import { DefaultComponent } from './shared/layouts/default/default.component';
import { OnlyHeaderComponent } from './shared/layouts/only-header/only-header-layout.component';

const routes: Routes = [
  {
    path: '',
    component: AppComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: '/home',
      },
      {
        path: 'home',
        component: DefaultComponent,
        loadChildren: () =>
          import('./pages/home-page/home-page.module').then(
            (m) => m.HomePageModule
          ),
      },
      {
        path: 'products',
        component: OnlyHeaderComponent,
        loadChildren: () =>
          import('./pages/product-list/product-list.module').then(
            (m) => m.ProductListModule
          ),
      },
    ],
  },
];

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes, { initialNavigation: 'enabledBlocking' }),
    LayoutDefaultModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
