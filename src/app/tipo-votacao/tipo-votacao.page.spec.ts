import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TipoVotacaoPage } from './tipo-votacao.page';

describe('TipoVotacaoPage', () => {
  let component: TipoVotacaoPage;
  let fixture: ComponentFixture<TipoVotacaoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TipoVotacaoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TipoVotacaoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
