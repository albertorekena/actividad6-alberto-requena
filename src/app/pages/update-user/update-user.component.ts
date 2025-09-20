import {Component, inject, Input} from "@angular/core";
import {toast} from "ngx-sonner";
import {UsersService} from "../../services/users.service";
import {Router} from "@angular/router";
import {IUser} from "../../interfaces/iuser";
import {FormComponent} from "../../components/form/form.component";

@Component({
  selector:"app-update-user",
  imports:[FormComponent],
  templateUrl:"./update-user.component.html",
  styleUrl:"./update-user.component.css"
})
export class UpdateUserComponent {
  usersService = inject(UsersService);
  router = inject(Router);

  @Input()
  _id:string = "";

  async saveData(event:IUser):Promise<void> {
    try {
      const response = await this.usersService.update(this._id, event);

      if (response) {
        this.router.navigate(["/home"]);

        toast.success("Usuario actualizado correctamente.");
      }
    } catch (error:any) {
      console.log(error.error);
    }
  }
};