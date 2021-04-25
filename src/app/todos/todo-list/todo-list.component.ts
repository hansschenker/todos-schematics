import { FilterEnum } from './../types/filter.enum';
import { TodosService } from './../todos.service';
import { Observable, combineLatest } from 'rxjs';
import { Todo } from './../types/todo';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { map } from 'rxjs/operators';

@Component({
  selector: 'todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class TodoListComponent implements OnInit {

  visibleTodos$: Observable<Todo[]>;
  noDataChanges$: Observable<boolean>;
  allTodosCompletedChanges$: Observable<boolean>;
  editingId: string | null = null;

  constructor(private todosService: TodosService) {
    // filter all isCompleted
    this.allTodosCompletedChanges$ = this.todosService.todosChanges$.pipe(
      map((todos) => todos.every((todo) => todo.isCompleted))
    );
    // no data changes
    this.noDataChanges$ = this.todosService.todosChanges$.pipe(
      map((todos) => todos.length === 0)
    );
    // visible changes according to filter (active/completed)
    this.visibleTodos$ = combineLatest(
      this.todosService.todosChanges$,
      this.todosService.filterChanges$
    ).pipe(
      map(([todos, filter]: [Todo[], FilterEnum]) => {
        // return active
        if (filter === FilterEnum.active) {
          return todos.filter((todo) => !todo.isCompleted);
          // return completed
        } else if (filter === FilterEnum.completed) {
          return todos.filter((todo) => todo.isCompleted);
        }
        // return all (no filter)
        return todos;
      })
    );
  }

  ngOnInit() {}

  toggleAllTodos(event: Event): void {
    const target = event.target as HTMLInputElement;
    this.todosService.toggleAll(target.checked);
  }

  setEditingId(editingId: string | null): void {
    this.editingId = editingId;
  }

}
