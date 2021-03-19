import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EscolherServidorAlunosPage } from './escolher-servidor-alunos.page';

describe('EscolherServidorAlunosPage', () => {
  let component: EscolherServidorAlunosPage;
  let fixture: ComponentFixture<EscolherServidorAlunosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EscolherServidorAlunosPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EscolherServidorAlunosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
