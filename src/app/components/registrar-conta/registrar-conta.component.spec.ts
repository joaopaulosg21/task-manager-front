import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrarContaComponent } from './registrar-conta.component';

describe('RegistrarContaComponent', () => {
  let component: RegistrarContaComponent;
  let fixture: ComponentFixture<RegistrarContaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RegistrarContaComponent]
    });
    fixture = TestBed.createComponent(RegistrarContaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
