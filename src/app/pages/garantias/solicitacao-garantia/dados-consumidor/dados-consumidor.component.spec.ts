import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DadosConsumidorComponent } from './dados-consumidor.component';

describe('DadosConsumidorComponent', () => {
  let component: DadosConsumidorComponent;
  let fixture: ComponentFixture<DadosConsumidorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DadosConsumidorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DadosConsumidorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
