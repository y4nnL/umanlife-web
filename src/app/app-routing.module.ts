import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {
  WelcomeComponent,
  welcomeRouterDataHeader,
  welcomeRouterDataState
} from './components/features/welcome/welcome.component';
import {
  SignupComponent,
  signupRouterDataHeader,
  signupRouterDataState
} from './components/features/signup/signup.component';
import {
  SigninComponent,
  signinRouterDataHeader,
  signinRouterDataState
} from './components/features/signin/signin.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: WelcomeComponent,
        data: { ...welcomeRouterDataHeader, ...welcomeRouterDataState },
      },
      {
        path: 'signup',
        component: SignupComponent,
        data: { ...signupRouterDataHeader, ...signupRouterDataState }
      },
      {
        path: 'signin',
        component: SigninComponent,
        data: { ...signinRouterDataHeader, ...signinRouterDataState }
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
