import {Component, input} from "@angular/core";
import {IUser} from "../../interfaces/iuser";
import {RouterLink} from "@angular/router";

@Component({
  selector:"app-card-user",
  imports: [RouterLink],
  templateUrl:"./card-user.component.html",
  styleUrl:"./card-user.component.css"
})
export class CardUserComponent {
  user = input<IUser>();

  removeUser(_id:string | undefined):void {}
};