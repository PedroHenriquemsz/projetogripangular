import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SolicitacaoGarantiaComponent } from './solicitacao-garantia.component';

describe('SolicitacaoGarantiaComponent', () => {
  let component: SolicitacaoGarantiaComponent;
  let fixture: ComponentFixture<SolicitacaoGarantiaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SolicitacaoGarantiaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SolicitacaoGarantiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
