import { Component, ViewChild } from '@angular/core';
import { IonContent, ActionSheetController } from '@ionic/angular';

@Component({
  selector: 'app-programm',
  templateUrl: './programm.page.html',
  styleUrls: ['./programm.page.scss'],
})
export class ProgrammPage{
  @ViewChild(IonContent, { static: false }) content: IonContent;
  constructor(private ActionSheetController: ActionSheetController) { }
  

  ScrollToTop() {
    this.content.scrollToTop(500);
  }

}
