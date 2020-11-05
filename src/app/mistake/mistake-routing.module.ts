import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MistakePage } from './mistake.page';

const routes: Routes = [
  {
    path: '',
    component: MistakePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MistakePageRoutingModule {}
