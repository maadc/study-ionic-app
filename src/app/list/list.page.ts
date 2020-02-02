import { Component, OnInit } from '@angular/core';
import json from '../../assets/ausstellerverzeichnis/av.json';

@Component({
  selector: 'app-list',
  templateUrl: 'list.page.html',
  styleUrls: ['list.page.scss']
})

export class ListPage implements OnInit {
  items: any = ListPage.addingAlphabeticLetters(ListPage.sortABC(json));

  static sortABC(array) {
    const newArray = array.sort((a, b) => {
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
    return newArray;
  }

  static sortCBA(array) {
    const newArray = array.sort((a, b) => {
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
    return newArray;
  }

  static addingAlphabeticLetters(array) {
    let usedLetters = []
    const startLength = array.length;
    let newArray = []
    for (let i = 0; i < startLength; i++) {
      const firstLetter = array[i].Name.charAt(0).toUpperCase();
      if (i === startLength - 1) {

      }
      if (!(usedLetters.includes(firstLetter))) {
        usedLetters.push(firstLetter)
        newArray.push({ "Name": firstLetter })
      }
      newArray.push(array[i])
    }
    return newArray;
  }

  ngOnInit() {
  }
}
