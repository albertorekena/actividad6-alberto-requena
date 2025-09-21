import {Component, inject} from "@angular/core";
import {UsersService} from "../../services/users.service";
import {IUsers} from "../../interfaces/iuser";
import {CardUserComponent} from "../../components/card-user/card-user.component";
import {PaginationButtonsComponent} from "../../components/pagination-buttons/pagination-buttons.component";

@Component({
  selector:"app-home",
  imports: [CardUserComponent, PaginationButtonsComponent],
  templateUrl:"./home.component.html",
  styleUrl:"./home.component.css"
})
export class HomeComponent {
  usersService = inject(UsersService);
  iUsers:IUsers | undefined;

  async ngOnInit() {
    try {
      this.iUsers = await this.usersService.getAll();
    } catch (error:any) {
      console.log(error);
    }
  }
};