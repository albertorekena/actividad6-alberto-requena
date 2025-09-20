import {Component, EventEmitter, inject, Output} from "@angular/core";
import {ActivatedRoute, Router} from "@angular/router";
import {ReactiveFormsModule, FormControl, FormGroup, Validators} from "@angular/forms";
import {UsersService} from "../../services/users.service";
import {IUser} from "../../interfaces/iuser";
import {IError} from "../../interfaces/ierror";
import {toast} from "ngx-sonner";

@Component({
  selector:"app-form",
  imports:[ReactiveFormsModule],
  templateUrl:"./form.component.html",
  styleUrl:"./form.component.css"
})
export class FormComponent {
  user!:IUser | IError;
  usersService = inject(UsersService);
  userForm:FormGroup;
  activatedRoute = inject(ActivatedRoute);
  router = inject(Router);

  @Output("formSubmitted")
  formSubmittedEmitter = new EventEmitter<IUser>();

  constructor() {
    this.userForm = new FormGroup({
      first_name:new FormControl("", []),
      last_name:new FormControl("", []),
      email:new FormControl("", []),
      image:new FormControl("", []),
    }, []);
  }
  
  async ngOnInit() {
    let _id = this.activatedRoute.snapshot.url[1].path;
    let first_name:string = "";
    let last_name:string = "";
    let email:string = "";
    let image:string = "";

    this.user = await this.usersService.getById(_id);

    if (this.user._id) {
      first_name = this.user.first_name;
      last_name = this.user.last_name;
      email = this.user.email;
      image = this.user.image;
    } else {
      this.router.navigate(["/home"]);

      toast.error("El usuario que has querido actualizar no existe.");
    }

    this.userForm = new FormGroup({
      first_name:new FormControl(first_name, [
        Validators.required,
        Validators.minLength(3)
      ]),
      last_name:new FormControl(last_name, [
        Validators.required,
        Validators.minLength(3)
      ]),
      email:new FormControl(email, [
        Validators.required,
        Validators.pattern(/^\w+@[a-zA-Z_]+\.[a-zA-Z]{2,3}$/)
      ]),
      image:new FormControl(image, [
        Validators.required,
        Validators.pattern(/^https:\/\//)
      ]),
    }, []);
  }
  
  checkControl(controlName:string, errorName:string):boolean | undefined {
    return this.userForm.get(controlName)?.hasError(errorName) && this.userForm.get(controlName)?.touched;
  }

  getFormData():void {
    this.formSubmittedEmitter.emit(this.userForm.value);
  }
};