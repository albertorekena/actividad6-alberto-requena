import {Component, inject, Input} from "@angular/core";
import {UsersService} from "../../services/users.service";
import {IUser} from "../../interfaces/iuser";
import {RouterLink} from "@angular/router";

@Component({
  selector:"app-user",
  imports: [RouterLink],
  templateUrl:"./user.component.html",
  styleUrl:"./user.component.css"
})
export class UserComponent {
  usersService = inject(UsersService);
  user:IUser | undefined;

  @Input()
  _id!:string;

  async ngOnInit() {
    try {
      this.user = await this.usersService.getById(this._id);
    } catch (error:any) {
      console.log(error);
    }
  }

  removeUser(_id:string | undefined):void {}
};