import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EleicaoPage } from './eleicao.page';

describe('EleicaoPage', () => {
  let component: EleicaoPage;
  let fixture: ComponentFixture<EleicaoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EleicaoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EleicaoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
