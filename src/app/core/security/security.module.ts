import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './component/login/login.component';
import { HomeComponent } from './home/home.component';
import {routing} from "./security.routes";
import {SecurityService} from "../services/security/security.service";
import {MessageService} from "../services/message/message.service";
import {AuthenticationService} from "../services/authentication/authentication.service";

@NgModule({
  imports: [
    CommonModule,
    routing
  ],
  declarations: [LoginComponent, HomeComponent],
  providers : [
    SecurityService,
    MessageService,
    AuthenticationService
  ]
})
export class SecurityModule { }
