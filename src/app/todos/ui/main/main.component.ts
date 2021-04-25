import { Component } from '@angular/core';
import { Observable, combineLatest } from 'rxjs';
import { Todo } from '../../types/todo';
import { TodosService } from '../../todos.service';
import { map } from 'rxjs/operators';
import { FilterEnum } from '../../types/filter.enum';

@Component({
  selector: 'todo-main',
  templateUrl: './main.component.html',
})
export class MainComponent {
  visibleTodos$: Observable<Todo[]>;
  noTodoClass$: Observable<boolean>;
  isAllTodosSelected$: Observable<boolean>;
  editingId: string | null = null;

  constructor(private todosService: TodosService) {

    this.isAllTodosSelected$ = this.todosService.todosChanges$.pipe(
      map((todos) => todos.every((todo) => todo.isCompleted))
    );

    this.noTodoClass$ = this.todosService.todosChanges$.pipe(
      map((todos) => todos.length === 0)
    );
    this.visibleTodos$ = combineLatest(
      this.todosService.todosChanges$,
      this.todosService.filterChanges$
    ).pipe(
      map(([todos, filter]: [Todo[], FilterEnum]) => {
        if (filter === FilterEnum.active) {
          return todos.filter((todo) => !todo.isCompleted);
        } else if (filter === FilterEnum.completed) {
          return todos.filter((todo) => todo.isCompleted);
        }
        return todos;
      })
    );
  }

  toggleAllTodos(event: Event): void {
    const target = event.target as HTMLInputElement;
    this.todosService.toggleAll(target.checked);
  }

  setEditingId(editingId: string | null): void {
    this.editingId = editingId;
  }
}
