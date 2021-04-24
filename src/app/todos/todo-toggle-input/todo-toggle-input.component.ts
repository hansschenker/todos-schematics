import { Component, OnInit } from '@angular/core';

import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { TodosService } from './../todos.service';

@Component({
  selector: 'todo-toggle',
  templateUrl: './todo-toggle-input.component.html',
  styleUrls: ['./todo-toggle-input.component.css']
})
export class TodoToggleComponent implements OnInit {
  isAllTodosSelected$: Observable<boolean>;

  constructor(private todosService: TodosService){
  }
  ngOnInit() {
    // map every todo isCompleted == true
    this.isAllTodosSelected$ = this.todosService.todos$.pipe(
      map((todos) => todos.every((todo) => todo.isCompleted))
    );

  }
  toggleAllTodos(event: Event): void {
    const target = event.target as HTMLInputElement;
    console.log("Toggle all:", target.checked)
    this.todosService.toggleAll(target.checked);
  }
}
