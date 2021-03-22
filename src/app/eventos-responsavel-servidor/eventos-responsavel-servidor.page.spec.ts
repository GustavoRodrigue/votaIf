import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EventosResponsavelServidorPage } from './eventos-responsavel-servidor.page';

describe('EventosResponsavelServidorPage', () => {
  let component: EventosResponsavelServidorPage;
  let fixture: ComponentFixture<EventosResponsavelServidorPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventosResponsavelServidorPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EventosResponsavelServidorPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
