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

  describe('item json-array', () => {

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
    })

    it('should sort the array c->B->A', () =>{
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

    it('should add alphabetic letter-object', () => {
      const input = [
        {"Name": "alpha"},
        {"Name": "beta"},
        {"Name": "gamma"}
      ]
      const outcome = [
      {"Name": "A"},
      {"Name": "alpha"},
      {"Name": "B"},
      {"Name": "beta"},
      {"Name": "G"},
      {"Name": "gamma"}
    ]
      expect(ListPage.addingAlphabeticLetters(input)).toEqual(outcome);
    });
  });

  it('should sort and add letter', () =>{
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
});