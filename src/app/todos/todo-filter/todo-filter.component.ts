import { Observable, Subject } from 'rxjs';
import { TodosService } from './../todos.service';
import { FilterEnum } from './../types/filter.enum';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { map } from 'rxjs/operators';

@Component({
  selector: 'todo-filter',
  templateUrl: './todo-filter.component.html',
  styleUrls: ['./todo-filter.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class TodoFilterComponent {

  noTodosClass$: Observable<boolean>;
  
  activeCount$: Observable<number>;
  itemsLeftText$: Observable<string>;

  filterState = new Subject<FilterEnum>()
  filter$ = this.filterState.asObservable();                //Observable<FilterEnum>;
  filterEnum = FilterEnum;

  constructor(private todosService: TodosService) {

    this.activeCount$ = this.todosService.todosChanges$.pipe(
      map((todos) => todos.filter((todo) => !todo.isCompleted).length)
    );
    this.itemsLeftText$ = this.activeCount$.pipe(
      map((activeCount) => `item${activeCount !== 1 ? 's' : ''} left`)
    );
    this.noTodosClass$ = this.todosService.todosChanges$.pipe(
      map((todos) => todos.length === 0)
    );
    this.filter$ = this.todosService.filterChanges$;

  }
  changeFilter(event: Event, filterName: FilterEnum): void {
    event.preventDefault();
    this.todosService.changeFilter(filterName);
  }
  filtersclick(event) {
    console.log("filters-click:",event.srcElement.innerText)
    const filter: FilterEnum = event.srcElement.innerText.toLowerCase()
    this.filterState.next(filter)
  }
}
