import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ThemenplakatePageRoutingModule } from './themenplakate-routing.module';

import { ThemenplakatePage } from './themenplakate.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ThemenplakatePageRoutingModule
  ],
  declarations: [ThemenplakatePage]
})
export class ThemenplakatePageModule {}
