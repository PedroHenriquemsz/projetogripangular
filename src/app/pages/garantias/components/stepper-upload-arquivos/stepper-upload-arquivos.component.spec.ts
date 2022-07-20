import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StepperUploadArquivosComponent } from './stepper-upload-arquivos.component';

describe('StepperUploadArquivosComponent', () => {
  let component: StepperUploadArquivosComponent;
  let fixture: ComponentFixture<StepperUploadArquivosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StepperUploadArquivosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StepperUploadArquivosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
