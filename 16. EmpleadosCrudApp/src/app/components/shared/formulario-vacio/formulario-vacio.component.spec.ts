import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioVacioComponent } from './formulario-vacio.component';

describe('FormularioVacioComponent', () => {
  let component: FormularioVacioComponent;
  let fixture: ComponentFixture<FormularioVacioComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormularioVacioComponent]
    });
    fixture = TestBed.createComponent(FormularioVacioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
