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

  Akkordion(elementId){
    debugger;
    const element = document.getElementById(elementId);

    element.classList.toggle("active");
    var panel = element.nextElementSibling;

    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  }
}
