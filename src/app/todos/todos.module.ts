import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Todo Feature
import { TodosPage } from 'src/app/todos/todos.page';
import { TodosService } from './todos.service';
import { HeaderComponent } from './components/ui/header/header.component';
import { MainComponent } from './components/ui/main/main.component';
// import { TodoListItem } from './components/feature/todos/todo-list-item/todo-list-item.component';
import { FooterComponent } from './components/ui/footer/footer.component';
import { TodoListItem } from './todo-list-item/todo-list-item.component';


@NgModule({
  declarations: [
    TodosPage,
    TodoListItem,
    HeaderComponent,
    MainComponent,
    FooterComponent,
  ],
  exports: [
    TodosPage,
    HeaderComponent,
    MainComponent,
    FooterComponent,
  ],
  // imports: [BrowserModule],
  imports: [BrowserModule, CommonModule],
  providers: [TodosService],
  bootstrap: [TodosPage]
})
export class TodosModule {}
