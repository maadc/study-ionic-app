import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EintrittspreisePageRoutingModule } from './eintrittspreise-routing.module';

import { EintrittspreisePage } from './eintrittspreise.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EintrittspreisePageRoutingModule
  ],
  declarations: [EintrittspreisePage]
})
export class EintrittspreisePageModule {}
