import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AddUsuarioVotacaoPage } from './add-usuario-votacao.page';

describe('AddUsuarioVotacaoPage', () => {
  let component: AddUsuarioVotacaoPage;
  let fixture: ComponentFixture<AddUsuarioVotacaoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddUsuarioVotacaoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AddUsuarioVotacaoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
