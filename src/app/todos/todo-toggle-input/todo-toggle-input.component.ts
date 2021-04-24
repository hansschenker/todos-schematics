import { Todo } from './../types/todo';
import { Component, Input, OnChanges, OnInit, SimpleChanges, ɵɵNgOnChangesFeature } from '@angular/core';

import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { TodosService } from './../todos.service';

@Component({
  selector: 'todo-toggle',
  templateUrl: './todo-toggle-input.component.html',
  styleUrls: ['./todo-toggle-input.component.css']
})
export class TodoToggleComponent implements OnInit, OnChanges {
  @Input()
  private _complete = false;
  public get complete() {
    return this._complete;
  }
  public set complete(value) {
    this._complete = value;
    this.toggleAllTodos(value);
  }

  isAllTodosSelected$: Observable<boolean>;

  constructor(private todosService: TodosService){
  }
  //                   SimpleChanges
  ngOnChanges(changes: SimpleChanges): void {
    console.log("toggle todo changes:", changes);
  }
  ngOnInit() {
    // map every todo isCompleted == true
    this.isAllTodosSelected$ = this.todosService.todos$.pipe(
      map((todos) => todos.every((todo) => todo.isCompleted))
    );
  
  }
  toggleAllTodos(checked: boolean): void {
    // const target = event.target as HTMLInputElement;
    console.log("Toggle all:", checked)
    this.todosService.toggleAll(checked);
  }
}
