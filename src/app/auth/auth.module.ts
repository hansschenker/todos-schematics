import { AuthPageRoutingModule } from './auth-page-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { RouterModule,Routes  } from '@angular/router';
// Auth
import { AuthPage } from './auth.page';
// import { AuthPageModule } from './auth-page.module';


// const routes: Routes = [
//   { path: 'auth', component: AuthPage },
// ]

@NgModule({
  declarations: [AuthPage],
  imports: [
    CommonModule, 
    AuthPageRoutingModule,
    // RouterModule.forChild(routes), AuthPageModule
  ],
  exports: []
})
export class AuthModule { }
