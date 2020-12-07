import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AddParticipantePage } from './add-participante.page';

describe('AddParticipantePage', () => {
  let component: AddParticipantePage;
  let fixture: ComponentFixture<AddParticipantePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddParticipantePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AddParticipantePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
