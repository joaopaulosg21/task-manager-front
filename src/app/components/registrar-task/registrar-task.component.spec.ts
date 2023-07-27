import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrarTaskComponent } from './registrar-task.component';

describe('RegistrarTaskComponent', () => {
  let component: RegistrarTaskComponent;
  let fixture: ComponentFixture<RegistrarTaskComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RegistrarTaskComponent]
    });
    fixture = TestBed.createComponent(RegistrarTaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
