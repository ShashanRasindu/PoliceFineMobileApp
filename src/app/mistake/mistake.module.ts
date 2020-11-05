import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MistakePageRoutingModule } from './mistake-routing.module';

import { MistakePage } from './mistake.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MistakePageRoutingModule
  ],
  declarations: [MistakePage]
})
export class MistakePageModule {}
