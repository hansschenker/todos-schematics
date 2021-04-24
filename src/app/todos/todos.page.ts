import { Component, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.page.html',
  encapsulation: ViewEncapsulation.None
})
export class TodosPage {
  constructor(private router: Router) {

  }

}
