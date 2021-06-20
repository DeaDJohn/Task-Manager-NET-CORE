import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TareaUserComponent } from './tarea-user.component';

describe('TareaUserComponent', () => {
  let component: TareaUserComponent;
  let fixture: ComponentFixture<TareaUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TareaUserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TareaUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
