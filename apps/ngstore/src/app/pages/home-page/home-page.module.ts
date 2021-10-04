import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './home-page.component';
import { HomePageRoutingModule } from './home-page-routing.module';
import { UiModule } from '@wilyan-company/ui';

@NgModule({
  declarations: [HomePageComponent],
  imports: [CommonModule, HomePageRoutingModule, UiModule],
  exports: [HomePageComponent],
})
export class HomePageModule {}
