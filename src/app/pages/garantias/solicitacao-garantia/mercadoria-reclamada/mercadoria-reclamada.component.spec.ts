import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MercadoriaReclamadaComponent } from './mercadoria-reclamada.component';

describe('MercadoriaReclamadaComponent', () => {
  let component: MercadoriaReclamadaComponent;
  let fixture: ComponentFixture<MercadoriaReclamadaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MercadoriaReclamadaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MercadoriaReclamadaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
