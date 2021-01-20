import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AddServidorPage } from './add-servidor.page';

describe('AddServidorPage', () => {
  let component: AddServidorPage;
  let fixture: ComponentFixture<AddServidorPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddServidorPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AddServidorPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
