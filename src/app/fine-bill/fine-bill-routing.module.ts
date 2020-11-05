import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FineBillPage } from './fine-bill.page';

const routes: Routes = [
  {
    path: '',
    component: FineBillPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FineBillPageRoutingModule {}
