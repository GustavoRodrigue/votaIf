import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AddParticipanteServidorPage } from './add-participante-servidor.page';

describe('AddParticipanteServidorPage', () => {
  let component: AddParticipanteServidorPage;
  let fixture: ComponentFixture<AddParticipanteServidorPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddParticipanteServidorPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AddParticipanteServidorPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
