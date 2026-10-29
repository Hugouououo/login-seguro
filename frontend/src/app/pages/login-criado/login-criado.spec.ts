import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginCriado } from './login-criado';

describe('LoginCriado', () => {
  let component: LoginCriado;
  let fixture: ComponentFixture<LoginCriado>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoginCriado],
    }).compileComponents();

    fixture = TestBed.createComponent(LoginCriado);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
