import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgressoGarantiaComponent } from './progresso-garantia.component';

describe('ProgressoGarantiaComponent', () => {
  let component: ProgressoGarantiaComponent;
  let fixture: ComponentFixture<ProgressoGarantiaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProgressoGarantiaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProgressoGarantiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
