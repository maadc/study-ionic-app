import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ProgrammPage } from './programm.page';

describe('ProgrammPage', () => {
  let component: ProgrammPage;
  let fixture: ComponentFixture<ProgrammPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProgrammPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ProgrammPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
