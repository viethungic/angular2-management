import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './component/login/login.component';
import { HomeComponent } from './component/home/home.component';
import {routing} from "./security.routes";
import {SecurityService} from "../services/security/security.service";
import {MessageService} from "../services/message/message.service";
import {AuthenticationService} from "../services/authentication/authentication.service";
import {HttpModule} from "@angular/http";
import {BrowserModule} from "@angular/platform-browser";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {AppTranslationModule} from "../../app.translation.module";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpModule,
    BrowserModule,
    ReactiveFormsModule,
    AppTranslationModule,
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
