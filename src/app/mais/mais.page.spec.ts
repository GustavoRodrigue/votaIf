import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MaisPage } from './mais.page';

describe('MaisPage', () => {
  let component: MaisPage;
  let fixture: ComponentFixture<MaisPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaisPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MaisPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
