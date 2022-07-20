import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DadosRevendedorComponent } from './dados-revendedor.component';

describe('DadosRevendedorComponent', () => {
  let component: DadosRevendedorComponent;
  let fixture: ComponentFixture<DadosRevendedorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DadosRevendedorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DadosRevendedorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
