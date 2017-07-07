import {RouterModule, Routes} from "@angular/router";
import {HomeComponent} from "./home/home.component";
import {SecurityService} from "../services/security/security.service";
import {LoginComponent} from "./component/login/login.component";
const securityRoutes: Routes = [
  {path: 'security/home', component: HomeComponent, canActivate: [SecurityService]},
  {path: 'security/login', component: LoginComponent}
]
export const routing = RouterModule.forRoot()
