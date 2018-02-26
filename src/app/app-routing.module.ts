import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WelcomeComponent } from './components/features/welcome/welcome.component';
import { welcomeRouterDataHeader, welcomeRouterDataState } from './components/features/welcome/welcome-data';
import { SignupComponent } from './components/features/signup/signup.component';
import { signupRouterDataHeader, signupRouterDataState } from './components/features/signup/signup-data';
import { SigninComponent } from './components/features/signin/signin.component';
import { signinRouterDataHeader, signinRouterDataState } from './components/features/signin/signin-data';

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
