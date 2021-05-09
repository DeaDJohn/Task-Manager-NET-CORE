import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TareaCrearComponent } from './tarea-crear.component';

describe('TareaCrearComponent', () => {
  let component: TareaCrearComponent;
  let fixture: ComponentFixture<TareaCrearComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TareaCrearComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TareaCrearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
