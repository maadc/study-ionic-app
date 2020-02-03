import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ListPage } from './list.page';

describe('ListPage', () => {
  let component: ListPage;
  let fixture: ComponentFixture<ListPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});


describe('Ausstellerverzeichnis', () => {

  describe('sorting', () =>{
    it('should sort the array A->B->C', () =>{
      const input = [
        {"Name": "alpha"},
        {"Name": "gamma"},
        {"Name": "beta"}
      ]
      const outcome = [
        {"Name": "alpha"},
        {"Name": "beta"},
        {"Name": "gamma"}
      ]
      expect(ListPage.sortABC(input)).toEqual(outcome);
    });

    it('should sort the array C->B->A', () =>{
      const input = [
        {"Name": "alpha"},
        {"Name": "gamma"},
        {"Name": "beta"}
      ]
      const outcome = [
        {"Name": "gamma"},
        {"Name": "beta"},
        {"Name": "alpha"}
      ]
      expect(ListPage.sortCBA(input)).toEqual(outcome);
    })

    it('should sort the attribute', () =>{
      const input = [
        {"Name": "aaa",
        "Halle": "A"},
        {"Name": "abb",
        "Halle": "B"},
        {"Name": "acc",
        "Halle": "C"},
        {"Name": "abc",
        "Halle": "D"},
      ]
      const outcome = [
        {"Name": "aaa",
        "Halle": "A"},
        {"Name": "abb",
        "Halle": "B"},
        {"Name": "acc",
        "Halle": "C"},
        {"Name": "abc",
        "Halle": "D"},
        
      ]
      expect(ListPage.sortHALLE(input)).toEqual(outcome);
    });

    it('should sort the attribute, otherway around', () =>{
      const input = [
        {"Name": "aaa",
        "Halle": "A"},
        {"Name": "abb",
        "Halle": "B"},
        {"Name": "acc",
        "Halle": "C"},
        {"Name": "abc",
        "Halle": "D"},
      ]
      const outcome = [
        {"Name": "abc",
        "Halle": "D"},
        {"Name": "acc",
        "Halle": "C"},
        {"Name": "abb",
        "Halle": "B"},
        {"Name": "aaa",
        "Halle": "A"},
        
      ]
      expect(ListPage.sortELLAH(input)).toEqual(outcome);
    });
  });

  describe('array manipulation', () => {
    it('should create multidimensional array', () => {
      const input = [
        {"Name": "alpa","Produkte": "a", "Kategorie": "b", "Halle": "Halle C"},
        {"Name": "beta","Produkte": "d", "Kategorie": "e", "Halle": "Halle F"},
      ]
      const outcome = [
          ["A", 
            [
              {"Name": "alpa","Produkte": "a", "Kategorie": "b", "Halle": "Halle C"}
            ]
          ],
          ["B",
            [
              {"Name": "beta","Produkte": "d", "Kategorie": "e", "Halle": "Halle F"}
            ]
          ],
      ];
    
      expect(ListPage.addingAlphabeticLetters(input)).toEqual(outcome);
    });
  })
  it('should create multidimensional array mith more attributes', () => {
    const input = [
      {"Name": "alpa", },
      {"Name": "alpha"},
      {"Name": "beta"},
      {"Name": "betha"}
    ]
    const outcome = [
        ["A", 
          [
            {"Name": "alpa"}, {"Name": "alpha"}
          ]
        ],
        ["B",
          [
            {"Name": "beta"}, {"Name": "betha"}
          ]
        ],
    ];
  
    expect(ListPage.addingAlphabeticLetters(input)).toEqual(outcome);
  });
})
  describe('item json-array', () => {

    xit('should add halle letter-object', () => {
      const input = [
        {"Name": "aaa",
        "Halle": "A"},
        {"Name": "abb",
        "Halle": "A"},
        {"Name": "acc",
        "Halle": "C"},
        {"Name": "abc",
        "Halle": "D"},
      ]
      const outcome = [
        {"Name": "A"},
        {"Name": "aaa",
        "Halle": "A"},
        {"Name": "abb",
        "Halle": "A"},
        {"Name": "C"},
        {"Name": "acc",
        "Halle": "C"},
        {"Name": "D"},
        {"Name": "abc",
        "Halle": "D"},
      ]
      expect(ListPage.addingHalleLetters(input)).toEqual(outcome);
    });
    
    xit('should sort (ABC) and add letter', () =>{
      const input = [
        {"Name": "alpha"},
        {"Name": "gamma"},
        {"Name": "beta"}
      ]
      const outcome = [
      {"Name": "A"},
      {"Name": "alpha"},
      {"Name": "B"},
      {"Name": "beta"},
      {"Name": "G"},
      {"Name": "gamma"}
    ]
    expect(ListPage.addingAlphabeticLetters(ListPage.sortABC(input))).toEqual(outcome);
    })

    xit('should sort (ABC) and add letter, even numbers', () =>{
      const input = [
        {"Name": "1A"},
        {"Name": "Ga54"},
        {"Name": "beta"}
      ]
      const outcome = [
      {"Name": "1"},
      {"Name": "1A"},
      {"Name": "B"},
      {"Name": "beta"},
      {"Name": "G"},
      {"Name": "Ga54"}
    ]
    expect(ListPage.addingAlphabeticLetters(ListPage.sortABC(input))).toEqual(outcome);
    })
  });