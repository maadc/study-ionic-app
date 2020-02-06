import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-eintrittspreise',
  templateUrl: './eintrittspreise.page.html',
  styleUrls: ['./eintrittspreise.page.scss'],
})
export class EintrittspreisePage{

  preise = [
    {Art: "Erwachsene", Preis:  "5,00€"},
    {Art: "Rentner mit Ausweis, Behinderte mit Ausweis", Preis:  "4,00€"},
    {Art: "Jugendliche 13 - 16 Jahre, Studenten mit Ausweis", Preis:  "3,00€"},
    {Art: "Kinder 6 - 12 Jahre", Preis:  "2,00€"},
    {Art: "16 Uhr Ticket", Preis:  "4,00€"},
  ]

  sparen = [
    {Art: "Familienkarte: 2 Erwachsene und alle eigenen Kinder", Preis:  "12,50€"},
    {Art: "kleine Familienkarte: 1 Erwachsene und alle eigenen Kinder", Preis:  "7,00€"},
    {Art: "Ehrenamtskarte", Preis:  "1 € Ermäßigung bei Vorlage der bayerischen Ehrenamtskarte (+Personalausweis)"}
  ]

}
