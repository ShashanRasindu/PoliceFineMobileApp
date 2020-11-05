import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MistakePage } from './mistake.page';

describe('MistakePage', () => {
  let component: MistakePage;
  let fixture: ComponentFixture<MistakePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MistakePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MistakePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
