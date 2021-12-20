import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';

import { NotFoundComponent } from './not-found-component';

@NgModule({
  declarations: [NotFoundComponent],
  imports: [BrowserModule, CardModule, ButtonModule],
})
export class NotFoundModule {}
