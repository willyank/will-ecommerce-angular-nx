import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { ToolbarModule } from 'primeng/toolbar';

import { ListLayoutComponent } from './list-layout.component';

@NgModule({
  declarations: [ListLayoutComponent],
  exports: [ListLayoutComponent],
  imports: [
    CommonModule,

    //primeng
    CardModule,
    ToolbarModule,
    ButtonModule,
  ],
})
export class ListLayoutModule {}
