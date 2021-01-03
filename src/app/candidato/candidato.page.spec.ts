import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CandidatoPage } from './candidato.page';

describe('CandidatoPage', () => {
  let component: CandidatoPage;
  let fixture: ComponentFixture<CandidatoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CandidatoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CandidatoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
