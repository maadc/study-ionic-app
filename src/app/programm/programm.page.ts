import { Component, ViewChild } from '@angular/core';
import { IonContent, ActionSheetController } from '@ionic/angular';
import { Tagesprogramm } from '../../assets/programm/tagesprogramm';

@Component({
  selector: 'app-programm',
  templateUrl: './programm.page.html',
  styleUrls: ['./programm.page.scss'],
})
export class ProgrammPage{
  @ViewChild(IonContent, { static: false }) content: IonContent;
  constructor(private ActionSheetController: ActionSheetController) { }
  
  programm = Tagesprogramm;

  ScrollToTop() {
    this.content.scrollToTop(500);
  }
  callAkkordion(elementId){
    ProgrammPage.Akkordion(elementId);
  }

  static Akkordion(elementId){   
    const element: HTMLElement = document.getElementById(elementId);
    element.classList.toggle("active");

    const panel: any = element.nextElementSibling;

    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  }
}