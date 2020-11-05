import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DriverSearchPage } from './driver-search.page';

describe('DriverSearchPage', () => {
  let component: DriverSearchPage;
  let fixture: ComponentFixture<DriverSearchPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DriverSearchPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DriverSearchPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
