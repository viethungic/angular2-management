import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {AuthenticationService} from "../../../services/authentication/authentication.service";
import {MessageService} from "../../../services/message/message.service";
import {UserModel} from "../../../model/user.model";
import {AbstractControl, FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-security-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  user: UserModel;
  loading = false;
  returnUrl: string;
  public form: FormGroup;
  public email: AbstractControl;
  public password: AbstractControl;
  public submitted: boolean = false;
  
  constructor(private route: ActivatedRoute,
              private router: Router,
              private authenticationService: AuthenticationService,
              private messageService: MessageService,
              private formBuilder: FormBuilder) {
    this.user = new UserModel;
    this.form = formBuilder.group({
      'email': ['', Validators.compose([Validators.required, Validators.minLength(1)])],
      'password': ['', Validators.compose([Validators.required, Validators.minLength(1)])]
    });
    this.email = this.form.controls['email'];
    this.password = this.form.controls['password'];
  }
  
  ngOnInit() {
    // Reset authentication status
    this.authenticationService.logout();
    
    // redirect url after logged success
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }
  
  login() {
    this.loading = true;
    this.authenticationService.login(this.user.username, this.user.password)
      .subscribe(
        data => {
          this.router.navigate([this.returnUrl]);
        },
        error => {
          this.messageService.error(error);
          this.loading = false;
        });
  }
  
  signIn() {
    this.loading = true;
    this.authenticationService.login(this.email.value, this.password.value)
      .subscribe(
        data => {
          this.router.navigate([this.returnUrl]);
        },
        error => {
          this.messageService.error(error);
          this.loading = false;
        });
  }
  
  onSubmit(values: Object):void {
    this.submitted = true;
    if (this.form.valid) {
      // your code goes here
      // console.log(values);
      this.signIn();
    }
  }
  
}
