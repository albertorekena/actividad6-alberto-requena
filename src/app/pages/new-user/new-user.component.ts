import {Component, inject} from "@angular/core";
import {Router} from "@angular/router";
import {UsersService} from "../../services/users.service";
import {IUser} from "../../interfaces/iuser";
import {FormComponent} from "../../components/form/form.component";
import {toast} from "ngx-sonner";

@Component({
  selector:"app-new-user",
  imports:[FormComponent],
  templateUrl:"./new-user.component.html",
  styleUrl:"./new-user.component.css"
})
export class NewUserComponent {
  usersService = inject(UsersService);
  router = inject(Router);
  submitButtonText:string = "Guardar";

  async saveData(event:IUser):Promise<void> {
    try {
      const response = await this.usersService.store(event);

      if (response) {
        this.router.navigate(["/home"]);

        toast.success("Usuario añadido correctamente.");
      }
    } catch (error:any) {
      console.log(error.error);
    }
  }
};