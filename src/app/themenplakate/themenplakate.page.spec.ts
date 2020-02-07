import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ThemenplakatePage } from './themenplakate.page';

describe('ThemenplakatePage', () => {
  let component: ThemenplakatePage;
  let fixture: ComponentFixture<ThemenplakatePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThemenplakatePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ThemenplakatePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
