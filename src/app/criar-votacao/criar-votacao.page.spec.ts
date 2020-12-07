import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CriarVotacaoPage } from './criar-votacao.page';

describe('CriarVotacaoPage', () => {
  let component: CriarVotacaoPage;
  let fixture: ComponentFixture<CriarVotacaoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CriarVotacaoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CriarVotacaoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
