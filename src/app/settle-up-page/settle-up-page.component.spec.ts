import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SettleUpPageComponent } from './settle-up-page.component';

describe('SettleUpPageComponent', () => {
  let component: SettleUpPageComponent;
  let fixture: ComponentFixture<SettleUpPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SettleUpPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SettleUpPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
