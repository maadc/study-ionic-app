import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProgrammPageRoutingModule } from './programm-routing.module';

import { ProgrammPage } from './programm.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProgrammPageRoutingModule
  ],
  declarations: [ProgrammPage]
})
export class ProgrammPageModule {}
