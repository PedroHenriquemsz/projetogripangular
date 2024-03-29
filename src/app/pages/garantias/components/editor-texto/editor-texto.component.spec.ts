import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditorTextoComponent } from './editor-texto.component';

describe('EditorTextoComponent', () => {
  let component: EditorTextoComponent;
  let fixture: ComponentFixture<EditorTextoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditorTextoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditorTextoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
