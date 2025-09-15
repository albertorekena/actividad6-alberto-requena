import {Component, inject} from "@angular/core";
import {UsersService} from "../../services/users.service";
import {IIndex} from "../../interfaces/iindex";
import {CardUserComponent} from "../../components/card-user/card-user.component";

@Component({
  selector:"app-home",
  imports: [CardUserComponent],
  templateUrl:"./home.component.html",
  styleUrl:"./home.component.css"
})
export class HomeComponent {
  usersService = inject(UsersService);
  iIndex:IIndex | undefined;

  async ngOnInit() {
    try {
      this.iIndex = await this.usersService.index();
    } catch (error:any) {
      console.log(error);
    }
  }
};