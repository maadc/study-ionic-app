import { Component, OnInit } from '@angular/core';
import json from '../../assets/ausstellerverzeichnis/av.json';

@Component({
  selector: 'app-list',
  templateUrl: 'list.page.html',
  styleUrls: ['list.page.scss']
})
export class ListPage implements OnInit {
  items: any = json;

  ngOnInit() {
    console.log(this.items);
  }
}
