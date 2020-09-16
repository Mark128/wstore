import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { GetSessionsPage } from './get-sessions.page';

describe('GetSessionsPage', () => {
  let component: GetSessionsPage;
  let fixture: ComponentFixture<GetSessionsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetSessionsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(GetSessionsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
