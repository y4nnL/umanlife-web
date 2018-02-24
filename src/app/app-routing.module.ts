import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent, welcomeHeaderData } from './welcome/welcome.component';
import { SignupComponent, signupHeaderData } from './signup/signup.component';

const routes: Routes = [
  { path: '', component: WelcomeComponent, data: { ...welcomeHeaderData } },
  { path: 'signup', component: SignupComponent, data: { ...signupHeaderData } }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
