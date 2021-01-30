import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MostrarServidorPage } from './mostrar-servidor.page';

describe('MostrarServidorPage', () => {
  let component: MostrarServidorPage;
  let fixture: ComponentFixture<MostrarServidorPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MostrarServidorPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MostrarServidorPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
