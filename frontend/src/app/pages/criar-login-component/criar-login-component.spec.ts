import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CriarLoginComponent } from './criar-login-component';

describe('CriarLoginComponent', () => {
  let component: CriarLoginComponent;
  let fixture: ComponentFixture<CriarLoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CriarLoginComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CriarLoginComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
