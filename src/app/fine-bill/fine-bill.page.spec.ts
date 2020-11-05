import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FineBillPage } from './fine-bill.page';

describe('FineBillPage', () => {
  let component: FineBillPage;
  let fixture: ComponentFixture<FineBillPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FineBillPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FineBillPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
