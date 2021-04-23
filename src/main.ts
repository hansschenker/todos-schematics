import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

// import { AppModule } from './app/app.module';
import { TodosModule } from 'src/app/todos/todos.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

// platformBrowserDynamic().bootstrapModule(AppModule)
platformBrowserDynamic().bootstrapModule(TodosModule)
  .catch(err => console.error(err));
