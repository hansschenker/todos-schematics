import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Todo Ui
import { TodosPage } from 'src/app/todos/todos.page';
import { HeaderComponent } from './ui/header/header.component';
import { MainComponent } from './ui/main/main.component';
import { FooterComponent } from './ui/footer/footer.component';

// Todo Feature
import { TodosService } from './todos.service';
import { TodoListItem } from './todo-list-item/todo-list-item.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { TodoFilterComponent } from './todo-filter/todo-filter.component';
import { TodoCountComponent } from './todo-count/todo-count.component';
import { TodoFormComponent } from './todo-form/todo-form.component';


@NgModule({
  declarations: [
    HeaderComponent,
    MainComponent,
    FooterComponent,
    TodosPage,
    TodoListItem,
    TodoListComponent,
    TodoFilterComponent,
    TodoCountComponent,
    TodoFormComponent,
  ],
  exports: [
    HeaderComponent,
    MainComponent,
    FooterComponent,
    TodosPage,
  ],
  // imports: [BrowserModule],
  imports: [BrowserModule, CommonModule],
  providers: [TodosService],
  bootstrap: [TodosPage]
})
export class TodosModule {}
