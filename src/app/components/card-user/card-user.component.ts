import {Component, inject, input} from "@angular/core";
import {IUser} from "../../interfaces/iuser";
import {RouterLink} from "@angular/router";
import {UsersService} from "../../services/users.service";
import {toast} from "ngx-sonner";

@Component({
  selector:"app-card-user",
  imports: [RouterLink],
  templateUrl:"./card-user.component.html",
  styleUrl:"./card-user.component.css"
})
export class CardUserComponent {
  user = input<IUser>();
  usersService = inject(UsersService);

  async removeUser(_id:string | undefined):Promise<void> {
    if (_id) {
      try {
        const deletedUser = await this.usersService.delete(_id);

        if ("_id" in deletedUser) {
          toast.info("Usuario eliminado correctamente.");
        } else {
          toast.error("El usuario que has querido eliminar no existe.");
        }
      } catch (error) {
        toast.error("Error al eliminar el usuario.");
      }
    } else {
      toast.error("El usuario que has querido eliminar no existe.");
    }
  }
};