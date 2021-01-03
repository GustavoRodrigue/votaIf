import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TabsAlunoPage } from './tabs-aluno.page';

describe('TabsAlunoPage', () => {
  let component: TabsAlunoPage;
  let fixture: ComponentFixture<TabsAlunoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TabsAlunoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TabsAlunoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
