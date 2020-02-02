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

    it('should add alphabetic letter-object', () => {
      const input = [
        {"name": "alpha"},
        {"name": "beta"},
        {"name": "gamma"}
      ]
      const outcome = [
      {"name": "A"},
      {"name": "alpha"},
      {"name": "B"},
      {"name": "beta"},
      {"name": "C"},
      {"name": "cezar"}]
     
      expect(ListPage.addingAlphabeticLetters(input)).toEqual(outcome);
    });
  });

});