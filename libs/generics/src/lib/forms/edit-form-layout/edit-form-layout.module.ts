import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { TableModule } from 'primeng/table';
import { ToolbarModule } from 'primeng/toolbar';

import { EditFormLayoutComponent } from './edit-form-layout.component';

@NgModule({
  declarations: [EditFormLayoutComponent],
  exports: [EditFormLayoutComponent],
  imports: [
    CommonModule,

    //primeng
    CardModule,
    ToolbarModule,
    TableModule,
    ButtonModule,
  ],
})
export class EditFormLayoutModule {}
