import {Component, inject} from "@angular/core";
import {ReactiveFormsModule, FormControl, FormGroup, Validators} from "@angular/forms";
import {UsersService} from "../../services/users.service";
import {IUser} from "../../interfaces/iuser";

@Component({
  selector:"app-form",
  imports:[ReactiveFormsModule],
  templateUrl:"./form.component.html",
  styleUrl:"./form.component.css"
})
export class FormComponent {
  userForm:FormGroup;
  usersService = inject(UsersService);

  constructor() {
    this.userForm = new FormGroup({
      first_name:new FormControl("", [
        Validators.required,
        Validators.minLength(3)
      ]),
      last_name:new FormControl("", [
        Validators.required,
        Validators.minLength(3)
      ]),
      email:new FormControl("", [
        Validators.required,
        Validators.pattern(/^\w+@[a-zA-Z_]+\.[a-zA-Z]{2,3}$/)
      ]),
      image:new FormControl("", [
        Validators.required,
        Validators.pattern(/^https:\/\//)
      ]),
    }, []);
  }

  checkControl(controlName:string, errorName:string):boolean | undefined {
    return this.userForm.get(controlName)?.hasError(errorName) && this.userForm.get(controlName)?.touched;
  }

  getFormData():IUser {
    return this.userForm.value;
  }
};