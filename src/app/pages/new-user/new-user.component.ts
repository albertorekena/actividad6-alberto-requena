import {Component, inject} from "@angular/core";

import {FormComponent} from "../../components/form/form.component";

@Component({
  selector:"app-new-user",
  imports:[FormComponent],
  templateUrl:"./new-user.component.html",
  styleUrl:"./new-user.component.css"
})
export class NewUserComponent {
  // store(user:IUser):Promise<IUser | string> {
  //   return lastValueFrom(this.httpClient.post<IUser>(this.baseUrl, user));
  // }

  // async getFormData():Promise<IUser | string> {
  //   const user:IUser | string = await this.usersService.store(this.userForm.value);

  //   return user;
  // }
};