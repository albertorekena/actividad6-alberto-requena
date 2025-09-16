import {Component} from "@angular/core";
import {ReactiveFormsModule, FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector:"app-new-user",
  imports:[ReactiveFormsModule],
  templateUrl:"./new-user.component.html",
  styleUrl:"./new-user.component.css"
})
export class NewUserComponent {
  userForm:FormGroup;

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

  getFormData():void {}
};