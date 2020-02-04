import { Component, ViewChild } from '@angular/core';
import json from '../../assets/ausstellerverzeichnis/av.json';
import { ActionSheetController, IonContent } from '@ionic/angular';

import {Sort} from "./sort";

@Component({
  selector: 'app-list',
  templateUrl: 'list.page.html',
  styleUrls: ['list.page.scss']
})

export class ListPage {
  @ViewChild(IonContent, { static: false }) content: IonContent;
  items: any = ListPage.addingAlphabeticLetters(Sort.sortABC(json));

  constructor(private ActionSheetController: ActionSheetController) { }

  openActionSheet() {
    this.ActionSheetController.create({
      header: 'Sortierung',
      buttons: [
        {
          text: "Alphabetisch",
          icon: 'arrow-round-up',
          handler: () => {
            this.items = ListPage.addingAlphabeticLetters(Sort.sortABC(json));
          }
        },
        {
          text: "Alphabetisch",
          icon: 'arrow-round-down',
          handler: () => {
            this.items = ListPage.addingAlphabeticLetters(Sort.sortCBA(json));
          }
        },
        {
          text: "Hallen",
          icon: 'arrow-round-up',
          handler: () => {
            this.items = ListPage.addingHalleLetters(Sort.sortHALLE(json));
          }
        },
        {
          text: "Hallen",
          icon: 'arrow-round-down',
          handler: () => {
            this.items = ListPage.addingHalleLetters(Sort.sortELLAH(json));
          }
        },
        {
          text: "Cancel",
          role: 'cancel'
        }
      ]
    }).then(ac => ac.present())
  }

  openJumper() {
    this.ActionSheetController.create({
      header: 'Schnellwahl',
      buttons: [
        {
          text: "Alphabetisch",
          handler: () => {
            ListPage.jump("A");
          }
        },
        {
          text: "Cancel",
          role: 'cancel'
        }
      ]
    }).then(ac => ac.present())
  }

  static jump(anchor) {
    var url = location.href ;
    location.href = url + "#" + anchor;
    history.replaceState(null, null, url);
  }

  ScrollToTop() {
    this.content.scrollToTop(500);
  }

  static addingAlphabeticLetters(array) {
    let newArray = [];
    let usedLetters = [];
    const startLength = array.length;

    for (let i = 0; i < startLength; i++) {
      const firstLetter = array[i].Name.charAt(0).toUpperCase();

      if (!(usedLetters.includes(firstLetter))) {
        usedLetters.push(firstLetter)
        //push a new array => ["Letter", [space]]
        newArray.push([firstLetter, []])
      }
      //[space] gets filled
      newArray[usedLetters.length - 1][1].push(array[i])
    }
    return newArray;
  }

  static addingHalleLetters(array) {
    let newArray = [];
    let usedHallen = [];
    const startLength = array.length;

    for (let i = 0; i < startLength; i++) {
      const firstHalle = array[i].Halle.toUpperCase();

      if (!(usedHallen.includes(firstHalle))) {
        usedHallen.push(firstHalle)
        newArray.push([firstHalle, []])
      }
      newArray[usedHallen.length - 1][1].push(array[i])
    }
    console.log(newArray)
    return newArray;
  }
}
