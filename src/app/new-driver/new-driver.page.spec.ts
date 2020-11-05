import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { NewDriverPage } from './new-driver.page';

describe('NewDriverPage', () => {
  let component: NewDriverPage;
  let fixture: ComponentFixture<NewDriverPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewDriverPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(NewDriverPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
