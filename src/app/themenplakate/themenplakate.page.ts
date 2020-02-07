import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-themenplakate',
  templateUrl: './themenplakate.page.html',
  styleUrls: ['./themenplakate.page.scss'],
})
export class ThemenplakatePage {

  slideOpts = {
    initialSlide: 0,
    speed: 400,
    freeMode: true,
    freeModeMomentumRatio: 0.5,
    freeModeMomentumVelocityRatio: 0.5,
    freeModeSticky: true,
  };

}
