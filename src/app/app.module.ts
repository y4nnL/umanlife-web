import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MatDialogModule } from '@angular/material/dialog';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSliderModule } from '@angular/material/slider';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatSnackBarModule } from '@angular/material/snack-bar';

import { TranslateModule } from '@ngx-translate/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { WelcomeComponent } from './components/features/welcome/welcome.component';
import { ButtonComponent } from './components/shared/button/button.component';
import { ForgotComponent } from './components/features/forgot/forgot.component';
import { PasswordComponent } from './components/features/password/password.component';
import { SigninComponent } from './components/features/signin/signin.component';
import { SignupComponent } from './components/features/signup/signup.component';
import { HeaderComponent } from './components/shared/header/header.component';
import { ContainerSimpleComponent } from './components/shared/container/container-simple/container-simple.component';

import { ServerModule } from './providers/Server/Server.module';
import { AuthModule } from './providers/Auth/Auth.module';
import { CanDeactivateServerComponent } from './providers/Server/Server-guard';
import { CanActivatePasswordToken } from './components/features/password/password-guard';
import { ConfiguratorComponent } from './components/features/configurator/configurator.component';
import { CanActivateSecured } from './providers/Auth/Auth-guard';
import { CanActivateUnsecured } from './providers/Auth/Auth-guard';
import { ProgramComponent } from './components/features/program/program.component';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    ButtonComponent,
    SignupComponent,
    HeaderComponent,
    ContainerSimpleComponent,
    SigninComponent,
    ForgotComponent,
    PasswordComponent,
    ConfiguratorComponent,
    ProgramComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule,
    TranslateModule.forRoot(),
    MatDialogModule,
    MatProgressSpinnerModule,
    MatSliderModule,
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatSnackBarModule,
    AppRoutingModule,
    ServerModule,
    AuthModule
  ],
  providers: [
    CanDeactivateServerComponent,
    CanActivatePasswordToken,
    CanActivateSecured,
    CanActivateUnsecured
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
