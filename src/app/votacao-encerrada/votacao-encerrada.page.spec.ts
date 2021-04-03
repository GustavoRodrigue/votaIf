import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { VotacaoEncerradaPage } from './votacao-encerrada.page';

describe('VotacaoEncerradaPage', () => {
  let component: VotacaoEncerradaPage;
  let fixture: ComponentFixture<VotacaoEncerradaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VotacaoEncerradaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(VotacaoEncerradaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
