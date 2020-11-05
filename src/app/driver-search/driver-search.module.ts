import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DriverSearchPageRoutingModule } from './driver-search-routing.module';

import { DriverSearchPage } from './driver-search.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DriverSearchPageRoutingModule
  ],
  declarations: [DriverSearchPage]
})
export class DriverSearchPageModule {}
