import { Component } from "@angular/core";
import { FormGroup } from "@angular/forms";

@Component({
  selector: 'app-register',
  templateUrl: 'register.component.html',
  styleUrls: ['register.component.scss']
})
export class RegisterComponent {
  public validateForm!: FormGroup;

  public async submitForm() {

  }
}
