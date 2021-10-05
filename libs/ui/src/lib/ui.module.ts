import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BannerComponent } from './banner/banner.component';
import { GolButtonComponent } from './gol-button/gol-button.component';
import { SliderComponent } from './slider/slider.component';

@NgModule({
  imports: [CommonModule],
  declarations: [BannerComponent, SliderComponent, GolButtonComponent],
  exports: [BannerComponent, SliderComponent, GolButtonComponent],
})
export class UiModule {}
