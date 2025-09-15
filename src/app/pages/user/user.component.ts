import {Component, inject} from "@angular/core";
import {UsersService} from "../../services/users.service";
import {IUser} from "../../interfaces/iuser";

@Component({
  selector:"app-user",
  imports:[],
  templateUrl:"./user.component.html",
  styleUrl:"./user.component.css"
})
export class UserComponent {
  usersService = inject(UsersService);
  user:IUser | undefined;

  async ngOnInit() {
    try {
      this.user = await this.usersService.show();
    } catch (error:any) {
      console.log(error);
    }
  }
};