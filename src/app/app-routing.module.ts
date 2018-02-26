import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WelcomeComponent } from './components/features/welcome/welcome.component';
import { welcomeRouterDataHeader, welcomeRouterDataState } from './components/features/welcome/welcome-data';
import { ForgotComponent } from './components/features/forgot/forgot.component';
import { forgotRouterDataHeader, forgotRouterDataState } from './components/features/forgot/forgot-data';
import { SignupComponent } from './components/features/signup/signup.component';
import { signupRouterDataHeader, signupRouterDataState } from './components/features/signup/signup-data';
import { SigninComponent } from './components/features/signin/signin.component';
import { signinRouterDataHeader, signinRouterDataState } from './components/features/signin/signin-data';
import { PasswordComponent } from './components/features/password/password.component';
import { passwordRouterDataHeader, passwordRouterDataState } from './components/features/password/password-data';

import { CanDeactivateServerComponent } from './providers/Server/Server-guard';
import { CanActivatePasswordToken } from './components/features/password/password-guard';

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
        path: 'forgot',
        component: ForgotComponent,
        canDeactivate: [ CanDeactivateServerComponent ],
        data: { ...forgotRouterDataHeader, ...forgotRouterDataState }
      },
      {
        path: 'signup',
        component: SignupComponent,
        canDeactivate: [ CanDeactivateServerComponent ],
        data: { ...signupRouterDataHeader, ...signupRouterDataState }
      },
      {
        path: 'signin',
        component: SigninComponent,
        canDeactivate: [ CanDeactivateServerComponent ],
        data: { ...signinRouterDataHeader, ...signinRouterDataState }
      },
      {
        path: 'password',
        component: PasswordComponent,
        canActivate: [ CanActivatePasswordToken ],
        canDeactivate: [ CanDeactivateServerComponent ],
        data: { ...passwordRouterDataHeader, ...passwordRouterDataState }
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
