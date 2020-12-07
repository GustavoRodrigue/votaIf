import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AddTurmasPage } from './add-turmas.page';

describe('AddTurmasPage', () => {
  let component: AddTurmasPage;
  let fixture: ComponentFixture<AddTurmasPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddTurmasPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AddTurmasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
