import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EventosEscolherProfServPage } from './eventos-escolher-prof-serv.page';

describe('EventosEscolherProfServPage', () => {
  let component: EventosEscolherProfServPage;
  let fixture: ComponentFixture<EventosEscolherProfServPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventosEscolherProfServPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EventosEscolherProfServPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
