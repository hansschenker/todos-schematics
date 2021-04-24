import { TodosService } from './../todos.service';
import { FilterEnum } from './../types/filter.enum';
import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';

@Component({
  selector: 'todo-count',
  templateUrl: './todo-count.component.html',
  styleUrls: ['./todo-count.component.css']
})
export class TodoCountComponent implements OnInit {

  noTodosClass$: Observable<boolean>;
  activeCount$: Observable<number>;
  itemsLeftText$: Observable<string>;
  filter$: Observable<FilterEnum>;
  filterEnum = FilterEnum;

  constructor(private todosService: TodosService) {
    
    this.activeCount$ = this.todosService.todos$.pipe(
      map((todos) => todos.filter((todo) => !todo.isCompleted).length)
    );
    this.itemsLeftText$ = this.activeCount$.pipe(
      map((activeCount) => `item${activeCount !== 1 ? 's' : ''} left`)
    );

  //   this.noTodosClass$ = this.todosService.todos$.pipe(
  //     map((todos) => todos.length === 0)
  //   );
  //   this.filter$ = this.todosService.filter$;
  // }

  // changeFilter(event: Event, filterName: FilterEnum): void {
  //   event.preventDefault();
  //   this.todosService.changeFilter(filterName);
  
}

  ngOnInit(): void {
  }

}
