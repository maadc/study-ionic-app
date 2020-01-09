import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LageplanPage } from './lageplan.page';

describe('LageplanPage', () => {
  let component: LageplanPage;
  let fixture: ComponentFixture<LageplanPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LageplanPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LageplanPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
