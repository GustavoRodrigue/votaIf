import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { VotacaoPage } from './votacao.page';

describe('VotacaoPage', () => {
  let component: VotacaoPage;
  let fixture: ComponentFixture<VotacaoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VotacaoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(VotacaoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
