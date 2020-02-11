import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-eintrittspreise',
  templateUrl: './eintrittspreise.page.html',
  styleUrls: ['./eintrittspreise.page.scss'],
})
export class EintrittspreisePage {

  preise = [
    { Art: 'Erwachsene', Preis: '6,50€' },
    { Art: 'Rentner mit Ausweis, Behinderte mit Ausweis', Preis: '5,50€' },
    { Art: 'Jugendliche 14 - 16 Jahre, Studenten mit Ausweis', Preis: '3,50€' },
    { Art: 'Kinder 6 - 13 Jahre', Preis: '1,50€' },
    { Art: '16 Uhr Ticket', Preis: '5,50€' },
  ];

  sparen = [
    { Art: 'Familienkarte: 2 Erwachsene und bis zu 3 Kinder, bis 13 Jahre', Preis: '12,50€' },
    { Art: 'Seniorentag, Freitag 06. März', Preis: '12,50€' }
  ];

}
