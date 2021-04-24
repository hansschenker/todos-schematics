import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoCountComponent } from './todo-count.component';

describe('TodoCountComponent', () => {
  let component: TodoCountComponent;
  let fixture: ComponentFixture<TodoCountComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TodoCountComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoCountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
