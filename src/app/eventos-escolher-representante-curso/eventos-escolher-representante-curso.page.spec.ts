import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EventosEscolherRepresentanteCursoPage } from './eventos-escolher-representante-curso.page';

describe('EventosEscolherRepresentanteCursoPage', () => {
  let component: EventosEscolherRepresentanteCursoPage;
  let fixture: ComponentFixture<EventosEscolherRepresentanteCursoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventosEscolherRepresentanteCursoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EventosEscolherRepresentanteCursoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
