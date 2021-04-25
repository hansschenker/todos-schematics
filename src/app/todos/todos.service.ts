import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Todo } from './types/todo';
import { FilterEnum } from './types/filter.enum';

@Injectable()
export class TodosService {
  todosChanges$ = new BehaviorSubject<Todo[]>([
    { id: 'a', text: 'Todo 100', isCompleted: false},
    { id: 'b', text: 'Todo 200', isCompleted: false},
    { id: 'c', text: 'Todo 300', isCompleted: false}
  ]);

  filterChanges$ = new BehaviorSubject<FilterEnum>(FilterEnum.all);

  addTodo(text: string): void {
    const newTodo: Todo = {
      text,
      isCompleted: false,
      id: Math.random().toString(16),
    };
    const updatedTodos = [...this.todosChanges$.getValue(), newTodo];
    this.todosChanges$.next(updatedTodos);
  }

  toggleAll(isCompleted: boolean): void {
    console.log('isCompleted', isCompleted);
    const updatedTodos = this.todosChanges$.getValue().map((todo) => {
      return {
        ...todo,
        isCompleted,
      };
    });
    this.todosChanges$.next(updatedTodos);
  }

  changeFilter(filterName: FilterEnum): void {
    this.filterChanges$.next(filterName);
  }

  changeTodo(id: string, text: string): void {
    const updatedTodos = this.todosChanges$.getValue().map((todo) => {
      if (todo.id === id) {
        return {
          ...todo,
          text,
        };
      }

      return todo;
    });
    this.todosChanges$.next(updatedTodos);
  }

  removeTodo(id: string): void {
    const updatedTodos = this.todosChanges$
      .getValue()
      .filter((todo) => todo.id !== id);

    this.todosChanges$.next(updatedTodos);
  }

  toggleTodo(id: string): void {
    const updatedTodos = this.todosChanges$.getValue().map((todo) => {
      if (todo.id === id) {
        return {
          ...todo,
          isCompleted: !todo.isCompleted,
        };
      }
      return todo;
    });
    this.todosChanges$.next(updatedTodos);
  }
}
