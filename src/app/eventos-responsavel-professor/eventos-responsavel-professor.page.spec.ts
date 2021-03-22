import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EventosResponsavelProfessorPage } from './eventos-responsavel-professor.page';

describe('EventosResponsavelProfessorPage', () => {
  let component: EventosResponsavelProfessorPage;
  let fixture: ComponentFixture<EventosResponsavelProfessorPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventosResponsavelProfessorPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EventosResponsavelProfessorPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
