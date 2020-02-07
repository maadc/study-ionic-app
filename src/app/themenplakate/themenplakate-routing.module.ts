import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ThemenplakatePage } from './themenplakate.page';

const routes: Routes = [
  {
    path: '',
    component: ThemenplakatePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ThemenplakatePageRoutingModule {}
