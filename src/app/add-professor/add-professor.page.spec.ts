import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AddProfessorPage } from './add-professor.page';

describe('AddProfessorPage', () => {
  let component: AddProfessorPage;
  let fixture: ComponentFixture<AddProfessorPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddProfessorPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AddProfessorPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
