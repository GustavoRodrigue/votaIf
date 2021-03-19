import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EscolherTecnicosServidorPage } from './escolher-tecnicos-servidor.page';

describe('EscolherTecnicosServidorPage', () => {
  let component: EscolherTecnicosServidorPage;
  let fixture: ComponentFixture<EscolherTecnicosServidorPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EscolherTecnicosServidorPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EscolherTecnicosServidorPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
