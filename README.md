# study-ionic-app
An [angular](https://angular.io) &amp; [ionic](https://ionicframework.com) project for university. Provided for mobile systems with [ionic-capacitor](https://capacitor.ionicframework.com).

# Inhalt
Eine App für eine lokale Verbrauchermesse in Dillingen. Thematische und inhaltliche Änderungen passieren im Messe-Geschäft täglich und bis kurz vor Eröffnung. Deshalb steht die akutelle Aussteller-Liste und das Tagesprogramm noch nicht zu Verfügung. Ich griff deshalb teilweise auf Daten der letzten Messe 2018 zurück und fügte diese als Platzhalter ein.

- Home: 
Die Startseite. Eine Übersicht mit Text und allen wichtigen Informationen.

- Themen: 
Ein Slider mit allen bisherigen Themenplakaten und einer kurzen Beschreibung.

- Aussteller:
Eine größe Liste mit allen Ausstellern von der Messe 2018. Ein Platzhalter für die neue Austellerlsite. Sortierbar nach Alphabet und Hallen. Mit "Sprungbrett" zu allen Unterteilungen.

- Lageplan:
Eime Ansicht über den aktuellen Lageplan.

- Programm:
Das Tagesprogramm der Messe 2018. Es ist als Platzhalter eingebaut, sodass nur noch die aktuellen Daten eingefügt werden müssen.

- Eintrittspreise:
Eine Übersichts-Tabelle mit den akutellen Preisen und Sparangeboten.

---

# Installation

1. Download von GitHub
2. `$ npm install`
3. Browserdarstellung: `$ ionic serve`
4. Mobile Version:   
`$ ionic build`    
 `$ npx cap add android`

 ---

# Dokumentation
 In dieser Studienarbeit wird eigentlich keine Dokumentation verlangt. Trotzdem gibt es einige Funktionen und Elemente denen ich eine Bühne geben möchte. Kurz drüber schreiben, den Aufwand und Weg beleuchten.


## Seiten

### /themenplakate
Eine Übersicht der aktuellen Plakate mit Unterschrift. Erstellt mit der Komponente `ion-slides`.  
Die Sliedes sind von `Swiper.js` abgekupfert. Ich habe es bei der Standart-Animation belassen, weil diese am Besten gepasst hat. Doch ich habe die Settings verändert.

Ich habe den `freeMode` aktiviert. Das ermöglicht ein nahtloses Swipen zwischen den Plakaten. Toll ist auch die "Einrast-Funktion". So wird bei der Auswahl das nächst-mögliche Plakat ausgewählt.

### /aussteller

## Tests
Ich habe die Test-Umgebung gewechselt. Die Standart-Tests von Ionic/Angular habe ich in `Jasmine-Karma` gelassen. `.spec.ts` ist die Endung dieser Dateien. Darin wird getestet, ob die Komponente erstellt wird und ob der Menü-Eintrag so ist, wie er sein sollte. 

### Jest
In einem früheren Projekt lernte ich die Umgebung `Jest` kennen. Ich bin auf dieses Umgeschwenkt. Von der Handhabung sind die beiden sehr ähnlich. Der große Unterschied war `jsdom`. Ich habe bei `Jest` eine einfache Möglichkeit mein DOM zu simulieren und zu testen.   

Bei `Jasmine-Karma` war es sehr ungewohnt, weil diese Umgebung die HTML-Elemente in den Browser rendert und dort testet. So werden in der Übersicht lauter HTML-Elemente rein gerendert, die die eigentliche Sicht auf das Test-Ergebnis bedecken. Bei `Jest` wird das DOM nur in der `node`-Umgebung simuliert.   
Das Testen hat damit viel einfacher funktioniert.
