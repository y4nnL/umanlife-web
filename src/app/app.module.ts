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

import { TranslateModule } from '@ngx-translate/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { WelcomeComponent } from './components/features/welcome/welcome.component';
import { ButtonComponent } from './components/shared/button/button.component';
import { SignupComponent } from './components/features/signup/signup.component';
import { HeaderComponent } from './components/shared/header/header.component';
import { ContainerSimpleComponent } from './components/shared/container/container-simple/container-simple.component';

import { ServerModule } from './providers/Server/Server.module';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    ButtonComponent,
    SignupComponent,
    HeaderComponent,
    ContainerSimpleComponent
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
    AppRoutingModule,
    ServerModule
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
