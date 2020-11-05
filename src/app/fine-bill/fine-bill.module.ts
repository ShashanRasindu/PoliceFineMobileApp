import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FineBillPageRoutingModule } from './fine-bill-routing.module';

import { FineBillPage } from './fine-bill.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FineBillPageRoutingModule
  ],
  declarations: [FineBillPage]
})
export class FineBillPageModule {}
