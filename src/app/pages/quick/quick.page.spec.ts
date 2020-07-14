import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { QuickPage } from './quick.page';

describe('QuickPage', () => {
  let component: QuickPage;
  let fixture: ComponentFixture<QuickPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuickPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(QuickPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
