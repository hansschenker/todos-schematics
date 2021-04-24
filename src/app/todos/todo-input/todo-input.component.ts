import { TodosService } from './../todos.service';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'todo-input',
  templateUrl: './todo-input.component.html',
  styleUrls: ['./todo-input.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class TodoInputComponent implements OnInit {
  text: string = '';

  constructor(private todoService: TodosService) {}

  changeText(event: Event): void {
    const target = event.target as HTMLInputElement;
    this.text = target.value;
  }

  addTodo(): void {
    this.todoService.addTodo(this.text);
    this.text = '';
  }

  ngOnInit(): void {
  }

}
