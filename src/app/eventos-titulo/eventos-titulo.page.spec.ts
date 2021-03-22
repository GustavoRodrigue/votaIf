import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EventosTituloPage } from './eventos-titulo.page';

describe('EventosTituloPage', () => {
  let component: EventosTituloPage;
  let fixture: ComponentFixture<EventosTituloPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventosTituloPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EventosTituloPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
