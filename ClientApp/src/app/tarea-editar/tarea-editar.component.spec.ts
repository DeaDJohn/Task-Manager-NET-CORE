import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { TareaEditarComponent } from './tarea-editar.component';

describe('TareaEditarComponent', () => {
  let component: TareaEditarComponent;
  let fixture: ComponentFixture<TareaEditarComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ TareaEditarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TareaEditarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
