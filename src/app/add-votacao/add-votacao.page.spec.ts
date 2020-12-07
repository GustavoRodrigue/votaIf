import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AddVotacaoPage } from './add-votacao.page';

describe('AddVotacaoPage', () => {
  let component: AddVotacaoPage;
  let fixture: ComponentFixture<AddVotacaoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddVotacaoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AddVotacaoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
