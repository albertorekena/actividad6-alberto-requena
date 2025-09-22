import {Component, inject} from "@angular/core";
import {UsersService} from "../../services/users.service";
import {IUsers} from "../../interfaces/iuser";
import {CardUserComponent} from "../../components/card-user/card-user.component";
import {PaginationButtonsComponent} from "../../components/pagination-buttons/pagination-buttons.component";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector:"app-home",
  imports: [CardUserComponent, PaginationButtonsComponent],
  templateUrl:"./home.component.html",
  styleUrl:"./home.component.css"
})
export class HomeComponent {
  usersService = inject(UsersService);
  iUsers:IUsers | undefined;
  activatedRoute = inject(ActivatedRoute);
  router = inject(Router);

  async ngOnInit() {
    this.activatedRoute.queryParams.subscribe(async params => {
      const page = params["page"];

      if (page == undefined || /^\d+$/.test(page)) {
        if (!page) {
          try {
            this.iUsers = await this.usersService.getAll();
          } catch (error:any) {
            console.log(error);
          }
        } else {
          try {
            this.iUsers = await this.usersService.getAll(page);
          } catch (error:any) {
            console.log(error);
          }
        }
      } else {
        this.router.navigate(["/error404"]);
      }
    });
  }
};