import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisualizadorArquivosComponent } from './visualizador-arquivos.component';

describe('VisualizadorArquivosComponent', () => {
  let component: VisualizadorArquivosComponent;
  let fixture: ComponentFixture<VisualizadorArquivosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VisualizadorArquivosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VisualizadorArquivosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
