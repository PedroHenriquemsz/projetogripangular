import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TermoGarantiaComponent } from './termo-garantia.component';

describe('TermoGarantiaComponent', () => {
  let component: TermoGarantiaComponent;
  let fixture: ComponentFixture<TermoGarantiaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TermoGarantiaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TermoGarantiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
