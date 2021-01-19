import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ServidorPage } from './servidor.page';

describe('ServidorPage', () => {
  let component: ServidorPage;
  let fixture: ComponentFixture<ServidorPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServidorPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ServidorPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
