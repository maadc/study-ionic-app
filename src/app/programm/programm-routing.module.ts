import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProgrammPage } from './programm.page';

const routes: Routes = [
  {
    path: '',
    component: ProgrammPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProgrammPageRoutingModule {}
