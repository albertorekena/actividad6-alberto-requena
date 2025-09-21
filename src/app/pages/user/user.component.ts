import {Component, inject, Input} from "@angular/core";
import {UsersService} from "../../services/users.service";
import {IUser} from "../../interfaces/iuser";
import {Router, RouterLink} from "@angular/router";
import {toast} from "ngx-sonner";
import Swal from "sweetalert2";

@Component({
  selector:"app-user",
  imports: [RouterLink],
  templateUrl:"./user.component.html",
  styleUrl:"./user.component.css"
})
export class UserComponent {
  usersService = inject(UsersService);
  user:IUser | undefined;
  router = inject(Router);

  @Input()
  _id!:string;

  async ngOnInit() {
    try {
      const result = await this.usersService.getById(this._id);
      if ("_id" in result) {
        this.user = result;
      }
    } catch (error:any) {
      console.log(error);
    }
  }

  removeUser(_id:string | undefined):void {
    Swal.fire({
      icon: "warning",
      text: "¿Estás seguro que quieres eliminar al usuario?",
      showCancelButton: true,
      confirmButtonText: "Eliminar",
      confirmButtonColor: "#0d6efd"
    }).then(async result => {
      if (result.isConfirmed) {
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
    });
  }
};