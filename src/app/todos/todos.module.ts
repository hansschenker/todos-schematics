import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Todo Feature
import { TodosPage } from 'src/app/todos/todos.page';
import { TodosService } from './todos.service';
import { HeaderComponent } from './components/ui/header/header.component';
import { MainComponent } from './components/ui/main/main.component';
import { TodoComponent } from './components/feature/todo/todo.component';
import { FooterComponent } from './components/ui/footer/footer.component';


@NgModule({
  declarations: [
    TodosPage,
    HeaderComponent,
    MainComponent,
    TodoComponent,
    FooterComponent,
  ],
  exports: [
    TodosPage,
    HeaderComponent,
    MainComponent,
    TodoComponent,
    FooterComponent,
  ],
  // imports: [BrowserModule],
  imports: [BrowserModule, CommonModule],
  providers: [TodosService],
  bootstrap: [TodosPage]
})
export class TodosModule {}
