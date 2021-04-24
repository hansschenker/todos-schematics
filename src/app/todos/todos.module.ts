import { LoginComponent } from './../auth/login/login.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from "@angular/router";

// Todo Ui
import { TodosPage } from 'src/app/todos/todos.page';
import { HeaderComponent } from './ui/header/header.component';
import { MainComponent } from './ui/main/main.component';
import { FooterComponent } from './ui/footer/footer.component';
import { AuthPage } from './../auth/auth.page';

// Todo Feature
import { TodosService } from './todos.service';
import { TodoListItem } from './todo-list-item/todo-list-item.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { TodoFilterComponent } from './todo-filter/todo-filter.component';
import { TodoCountComponent } from './todo-count/todo-count.component';
import { TodoFormComponent } from './todo-form/todo-form.component';
import { TodoInputComponent } from './todo-input/todo-input.component';
import { TodoToggleComponent } from './todo-toggle-input/todo-toggle-input.component';

const routes: Routes = [
  { path: 'main', component: MainComponent },
  { path: 'todos', component: TodoListComponent },
   { path: 'auth', component: LoginComponent }
]

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
    TodoInputComponent,
    TodoToggleComponent,
  ],
  exports: [
    HeaderComponent,
    MainComponent,
    FooterComponent,
    TodosPage,
    RouterModule
  ],
  // imports: [BrowserModule],
  imports: [BrowserModule, CommonModule, RouterModule.forRoot(routes)],
  providers: [TodosService, RouterModule],
  bootstrap: [TodosPage]
})
export class TodosModule {}
