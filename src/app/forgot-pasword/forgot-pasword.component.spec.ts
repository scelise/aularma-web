import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForgotPaswordComponent } from './forgot-pasword.component';

describe('ForgotPaswordComponent', () => {
  let component: ForgotPaswordComponent;
  let fixture: ComponentFixture<ForgotPaswordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ForgotPaswordComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ForgotPaswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
