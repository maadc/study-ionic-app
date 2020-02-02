import { Component, ViewChild } from '@angular/core';
import json from '../../assets/ausstellerverzeichnis/av.json';
import { ActionSheetController, IonContent } from '@ionic/angular';

@Component({
  selector: 'app-list',
  templateUrl: 'list.page.html',
  styleUrls: ['list.page.scss']
})

export class ListPage {
  @ViewChild(IonContent, {static: false}) content: IonContent;
  items: any = ListPage.addingAlphabeticLetters(ListPage.sortABC(json));
  
  constructor(private ActionSheetController: ActionSheetController) {}

  openActionSheet() {
    this.ActionSheetController.create({
      header: 'Sortierung',
      buttons: [
        {
          text: "Alphabetisch",
          icon: 'arrow-round-up',
          handler: () => {
            this.items = ListPage.addingAlphabeticLetters(ListPage.sortABC(json));
          }
        },
        {
          text: "Alphabetisch",
          icon: 'arrow-round-down',
          handler: () => {
            this.items = ListPage.addingAlphabeticLetters(ListPage.sortCBA(json));
          }
        },
        {
          text: "Hallen",
          icon: 'arrow-round-up',
          handler: () => {
            this.items = ListPage.addingHalleLetters(ListPage.sortHALLE(json));
          }
        },
        {
          text: "Hallen",
          icon: 'arrow-round-down',
          handler: () => {
            this.items = ListPage.addingHalleLetters(ListPage.sortELLAH(json));
          }
        },
        {
          text: "Cancel",
          role: 'cancel'
        }
      ]
    }).then(ac => ac.present())
  }

  ScrollToTop(){
    this.content.scrollToTop(1500);
  }

  static sortABC(array) {
    return array.sort((a, b) => {
      var nameA = a.Name.toUpperCase(); // ignore upper and lowercase
      var nameB = b.Name.toUpperCase(); // ignore upper and lowercase
      if (nameA < nameB) {
        return -1;
      }
      if (nameA > nameB) {
        return 1;
      }

      // names must be equal
      return 0;
    })
  }

  static sortCBA(array) {
    return array.sort((a, b) => {
      var nameA = a.Name.toUpperCase(); // ignore upper and lowercase
      var nameB = b.Name.toUpperCase(); // ignore upper and lowercase
      if (nameA < nameB) {
        return 1;
      }
      if (nameA > nameB) {
        return -1;
      }

      // names must be equal
      return 0;
    })
  }

  static sortHALLE(array) {
    return array.sort((a, b) => {
      var halleA = a.Halle.toUpperCase(); // ignore upper and lowercase
      var halleB = b.Halle.toUpperCase(); // ignore upper and lowercase
      if (halleA < halleB) {
        return -1;
      }
      if (halleA > halleB) {
        return 1;
      }

      // names must be equal
      return 0;
    })
  }

  static sortELLAH(array) {
    return array.sort((a, b) => {
      var halleA = a.Halle.toUpperCase(); // ignore upper and lowercase
      var halleB = b.Halle.toUpperCase(); // ignore upper and lowercase
      if (halleA < halleB) {
        return 1;
      }
      if (halleA > halleB) {
        return -1;
      }

      // names must be equal
      return 0;
    })
  }

  static addingAlphabeticLetters(array) {
    let usedLetters = []
    const startLength = array.length;
    let newArray = []
    for (let i = 0; i < startLength; i++) {
      const firstLetter = array[i].Name.charAt(0).toUpperCase();

      if (!(usedLetters.includes(firstLetter))) {
        usedLetters.push(firstLetter)
        newArray.push({ "Name": firstLetter })
      }
      newArray.push(array[i])
    }
    return newArray;
  }

  static addingHalleLetters(array) {
    let usedHallen = []
    const startLength = array.length;
    let newArray = []
    for (let i = 0; i < startLength; i++) {
      const firstHalle = array[i].Halle.toUpperCase();

      if (!(usedHallen.includes(firstHalle))) {
        usedHallen.push(firstHalle)
        newArray.push({ "Name": firstHalle })
      }
      newArray.push(array[i])
    }
    return newArray;
  }
}
