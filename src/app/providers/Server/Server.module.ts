import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { Server } from './Server';

@NgModule({
  imports: [
    HttpClientModule
  ],
  providers: [
    Server
  ]
})
export class ServerModule { }
