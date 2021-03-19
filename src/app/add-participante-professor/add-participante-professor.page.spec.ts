import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AddParticipanteProfessorPage } from './add-participante-professor.page';

describe('AddParticipanteProfessorPage', () => {
  let component: AddParticipanteProfessorPage;
  let fixture: ComponentFixture<AddParticipanteProfessorPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddParticipanteProfessorPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AddParticipanteProfessorPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
