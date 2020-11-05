import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DriverSearchPage } from './driver-search.page';

const routes: Routes = [
  {
    path: '',
    component: DriverSearchPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DriverSearchPageRoutingModule {}
