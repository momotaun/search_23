import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { OtpconfirmPage } from './otpconfirm.page';

describe('OtpconfirmPage', () => {
  let component: OtpconfirmPage;
  let fixture: ComponentFixture<OtpconfirmPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OtpconfirmPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(OtpconfirmPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
