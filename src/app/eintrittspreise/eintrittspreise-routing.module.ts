import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EintrittspreisePage } from './eintrittspreise.page';

const routes: Routes = [
  {
    path: '',
    component: EintrittspreisePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EintrittspreisePageRoutingModule {}
