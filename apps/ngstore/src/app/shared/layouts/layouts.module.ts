import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DefaultComponent } from './default/default.component';
import { FooterComponent } from '../footer/footer.component';
import { HeaderComponent } from '../header/header.component';
import { RouterModule } from '@angular/router';
import { OnlyHeaderComponent } from './only-header/only-header-layout.component';

@NgModule({
  declarations: [
    DefaultComponent,
    OnlyHeaderComponent,
    HeaderComponent,
    FooterComponent,
  ],
  imports: [CommonModule, RouterModule],
  exports: [DefaultComponent],
})
export class LayoutDefaultModule {}
