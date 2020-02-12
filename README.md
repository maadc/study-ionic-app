# study-ionic-app
An [angular](https://angular.io) & [ionic](https://ionicframework.com) project for university. Provided for mobile systems with [ionic-capacitor](https://capacitor.ionicframework.com).

# Inhalt
Eine App für eine lokale Verbrauchermesse "WIR" in Dillingen. Thematische und inhaltliche Änderungen passieren im Messe-Geschäft täglich und bis kurz vor Eröffnung. Deshalb steht die akutelle Aussteller-Liste und das Tagesprogramm noch nicht zu Verfügung. **Ich griff deshalb teilweise auf Daten anderer zurück und fügte diese als Platzhalter ein.**

- Home: 
Die Startseite. Eine Übersicht mit Text und allen wichtigen Informationen.

- Themen: 
Ein Slider mit allen bisherigen Themenplakaten und einer kurzen Beschreibung.

- Aussteller:
Eine größe Liste mit allen Ausstellern der Donauries-Ausstellung 2018. Ein Platzhalter für die offizielle Austellerliste.   
Sortierbar nach Alphabet und Hallen. Mit "Sprungbrett" zu allen Unterteilungen.

- Lageplan:
Eine Ansicht über den aktuellen Lageplan.

- Programm:
Das Tagesprogramm der WIR 2018. Als Platzhalter eingebaut, sodass nur noch die aktuellen Daten eingefügt werden müssen.

- Eintrittspreise:
Eine Übersichts-Tabelle mit den aktuellen Preisen und Sparangeboten.

## Material Dritter
Die Rechte an allen Bild- und Textmaterialien liegen bei der [Josef Werner Schmid GmbH](https://www.jws.de).  
Alle Materialien in `/assets` stammen von der Messeorganisationsfirma. Hier noch ein Mal der ausdrückliche Hinweis, das Aussteller-Liste und Tagesprogramm noch nicht veröffentlicht wurden und ich deshalb auf Material anderer Messen zurückgegriffen habe.
### Material anderer Messen
* Das Ausstellerverzeichnis ist von der [Donauries-Ausstellung 2019 in Nördlingen](https://www.donauries-ausstellung.de).
* Das Tagesprogramm ist von der [WIR 2018 in Dillingen](https://www.wir-2018.de/tagesprogrammmenu) mit abgeänderten Daten.

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

Ich habe den `freeMode` aktiviert. Das ermöglicht ein nahtloses Swipen zwischen den Plakaten. Zusätzlich ist  die "Einrast-Funktion" aktiviert, so wird bei der Auswahl das nächst-mögliche Plakat anvisiert.

### /aussteller
Auf dieser Seite findet sehr viel Array-Manipulatiin statt. In einer riesigen .csv-Datei sind alle Aussteller gespeichert. Daraus geneneriere ich eine leichter-lesbare .json-Datei. Beide befinden sich in `/src/assets/ausstellerverzeichnis`. 
Diese .json-Datei wird im Programm eingelesen und abgebildet, dabei gibt zwei Schritte.

#### Sortierung
In `sort.ts` werden vier Funktionen zur Verfügung gestellt. Jede dieser sortiert das .json-Array vor. Entweder nach ABC oder nach Hallen, Vor- und Rückwerts. Dabei wird der Befehl `array.sort()` verwendet. Dieser Kommando sortiert die Array nach bestimmten Kriterien und gibt dann eine neue, sortierte Array zurück. 

#### Array-Manipulation
Die sortierte Array wird im nächsten Schritt zerlegt und neu zusammengesetzt. Schließlich sollen die Aussteller im Frond-End "designed" ausgegeben werden. Hierzu ist eine bestimmte Form nötig. Nur so kann ich mit dem Angular-Befehl `*ngFor` durch das Array iterieren und einzelne Bestandteile ausgeben.

Die Tests zeigen sehr gut, wie das Array eingegeben und manipuliert wird. 
```
const input = [
        { Name: 'alpa', },
        { Name: 'alpha' },
        { Name: 'beta' },
        { Name: 'betha' }
      ];
      const outcome = [
        ['A',[{ Name: 'alpa' }, { Name: 'alpha' }]],
        ['B',[{ Name: 'beta' }, { Name: 'betha' }]],
      ];
```
Es wird durch jedes Objekt der Input-Array iteriert, dabei muss diese Array mit den Sortier-Funktionen vorsortiert sein. Zuerst wird der Anfangsbuchstabe eines ausgewählten Attributs (Name oder Halle)zwischengespeichert und als String in eine Array der 2. Dimension gesetzt. Diese 2D-Array soll alle Objekte mit dem selben, gespeicherten Anfangsbuchstaben enthalten: `['Buchstabe', [alle Objekte(3D-Array)]]`. 

In die 3D-Array werden die einzelnen Objekte der Input-Array abgespeichert. `[{ Name: 'alpa' }, { Name: 'alpha' }]`. Wenn das Programm merkt, dass nun ein neuer Anfangsbuchstabe vorkommt, wird eine neue 2D-Array generiert. Und der neue Anfangsbuchstabe darin gespeichert. Die 3D-Array wird mit allen Objekten gefüllt und der Vorgang beginnt von Neuen. 
Raus kommt eine nach Buchstaben sortierte Array (siehe `outcome`)), die bereit zur Front-End-Ausgabe ist. 

Die vorgeschaltete Sortierung lässt sich dabei beliebig verändert. Wichtig ist nur das die Zwischenspeicherung in der Array-Manipulation angepasst wird. Aktuell sind Hallen und Namen vorgesehen.

## Tests
Ich habe die Test-Umgebung gewechselt. Die Standart-Tests von Ionic/Angular habe ich in `Jasmine-Karma` gelassen. `.spec.ts` ist die Endung dieser Dateien. Darin wird getestet, ob die Komponente erstellt wird und ob der Menü-Eintrag so ist, wie er sein sollte. 

### Jest
In einem früheren Projekt lernte ich die Umgebung `Jest` kennen. Ich bin auf diese Umgeschwenkt. Von der Handhabung sind die beiden sehr ähnlich. Der große Unterschied war `jsdom`. Ich habe bei `Jest` eine einfachere Möglichkeit gefunden meine Unit-Tests zu schreiben.   

Bei `Jasmine-Karma` war es sehr ungewohnt, weil diese Umgebung die HTML-Elemente in echt, in den Browser rendert und dort testet. So werden in der Übersicht lauter HTML-Elemente erstellt, die in den einzelnen Funktionen benutzt werden. So bedeckt sich teilweise die Sicht auf das Test-Ergebnis.   
Bei `Jest` wird das DOM nur in der `node`-Umgebung simuliert. Das Testen hat damit viel einfacher funktioniert.

Die aktuelle Testabdeckung ist mit `npx jest --coverage` im Verzeichnis `/coverage/icov-report/index.html` zu finden.  
Unit-Tests befinden sich im Ordner `/src/test`.
