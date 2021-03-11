import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AddParticipanteTurmaPage } from './add-participante-turma.page';

describe('AddParticipanteTurmaPage', () => {
  let component: AddParticipanteTurmaPage;
  let fixture: ComponentFixture<AddParticipanteTurmaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddParticipanteTurmaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AddParticipanteTurmaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
