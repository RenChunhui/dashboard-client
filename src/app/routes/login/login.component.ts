import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { AuthService } from "src/app/services/auth.service";
import * as Cookies from "js-cookie";

@Component({
  selector: 'app-login',
  templateUrl: 'login.component.html',
  styleUrls: ['login.component.scss']
})
export class LoginComponent implements OnInit{
  public validateForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private router:Router,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.validateForm = this.fb.group({
      username: [null, [Validators.required]],
      password: [null, [Validators.required]],
      remember: [true]
    });
  }

  public async submitForm() {
    for (const i in this.validateForm.controls) {
      this.validateForm.controls[i].markAsDirty();
      this.validateForm.controls[i].updateValueAndValidity();
    }

    const result:any = await this.authService.login(this.validateForm.controls.username.value,this.validateForm.controls.password.value)
    Cookies.set('access_token',result.access_token);
    this.router.navigateByUrl('/home');
  }
}
