import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EintrittspreisePage } from './eintrittspreise.page';

describe('EintrittspreisePage', () => {
  let component: EintrittspreisePage;
  let fixture: ComponentFixture<EintrittspreisePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EintrittspreisePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EintrittspreisePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
