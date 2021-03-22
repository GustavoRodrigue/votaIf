import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EventosEscolherRepresentantePage } from './eventos-escolher-representante.page';

describe('EventosEscolherRepresentantePage', () => {
  let component: EventosEscolherRepresentantePage;
  let fixture: ComponentFixture<EventosEscolherRepresentantePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventosEscolherRepresentantePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EventosEscolherRepresentantePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
