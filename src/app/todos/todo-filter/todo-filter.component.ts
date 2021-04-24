import { Observable } from 'rxjs';
import { TodosService } from './../todos.service';
import { FilterEnum } from './../types/filter.enum';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'todo-filter',
  templateUrl: './todo-filter.component.html',
  styleUrls: ['./todo-filter.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class TodoFilterComponent implements OnInit {

  filter$: Observable<FilterEnum>;
  filterEnum = FilterEnum;

  constructor(private todosService: TodosService) { }

  ngOnInit(): void {
  }
  changeFilter(event: Event, filterName: FilterEnum): void {
    event.preventDefault();
    this.todosService.changeFilter(filterName);
  }
}
