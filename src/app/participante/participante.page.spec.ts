import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ParticipantePage } from './participante.page';

describe('ParticipantePage', () => {
  let component: ParticipantePage;
  let fixture: ComponentFixture<ParticipantePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParticipantePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ParticipantePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
