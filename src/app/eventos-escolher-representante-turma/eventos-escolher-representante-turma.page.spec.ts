import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EventosEscolherRepresentanteTurmaPage } from './eventos-escolher-representante-turma.page';

describe('EventosEscolherRepresentanteTurmaPage', () => {
  let component: EventosEscolherRepresentanteTurmaPage;
  let fixture: ComponentFixture<EventosEscolherRepresentanteTurmaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventosEscolherRepresentanteTurmaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EventosEscolherRepresentanteTurmaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
