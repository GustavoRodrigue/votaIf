import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AddCursosPage } from './add-cursos.page';

describe('AddCursosPage', () => {
  let component: AddCursosPage;
  let fixture: ComponentFixture<AddCursosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddCursosPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AddCursosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
