import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent, welcomeHeaderData } from './components/features/welcome/welcome.component';
import { SignupComponent, signupHeaderData } from './components/features/signup/signup.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: WelcomeComponent,
        data: { ...welcomeHeaderData },
      },
      {
        path: 'signup',
        component: SignupComponent,
        data: { ...signupHeaderData }
      }
    ]
  },

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
