import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EventosRepresentantePage } from './eventos-representante.page';

describe('EventosRepresentantePage', () => {
  let component: EventosRepresentantePage;
  let fixture: ComponentFixture<EventosRepresentantePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventosRepresentantePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EventosRepresentantePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
