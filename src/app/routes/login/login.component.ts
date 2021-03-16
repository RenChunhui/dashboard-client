import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: 'login.component.html',
  styles: [
    `
      form {
        width: 100%;
        max-width: 330px;
        padding: 15px;
        margin: auto;
      }
    `
  ]
})
export class LoginComponent implements OnInit {
  validateForm!:FormGroup;

  constructor() { }

  ngOnInit(): void {
  }

}
