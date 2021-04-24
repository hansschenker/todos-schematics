import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoToggleInputComponent } from './todo-toggle-input.component';

describe('TodoToggleInputComponent', () => {
  let component: TodoToggleInputComponent;
  let fixture: ComponentFixture<TodoToggleInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TodoToggleInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoToggleInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
