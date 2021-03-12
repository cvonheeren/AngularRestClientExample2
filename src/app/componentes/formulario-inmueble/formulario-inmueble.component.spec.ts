import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioInmuebleComponent } from './formulario-inmueble.component';

describe('FormularioInmuebleComponent', () => {
  let component: FormularioInmuebleComponent;
  let fixture: ComponentFixture<FormularioInmuebleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormularioInmuebleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormularioInmuebleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
