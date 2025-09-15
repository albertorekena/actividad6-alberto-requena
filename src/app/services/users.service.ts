import {Injectable, inject} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {lastValueFrom} from "rxjs";
import {IIndex} from "../interfaces/iindex";
import {IUser} from "../interfaces/iuser";

@Injectable({
  providedIn:"root"
})
export class UsersService {
  private baseUrl:string = "https://peticiones.online/api/users";
  private httpClient = inject(HttpClient);

  index():Promise<IIndex> {
    return lastValueFrom(this.httpClient.get<IIndex>(this.baseUrl));
  }

  show(_id:string):Promise<IUser> {
    return lastValueFrom(this.httpClient.get<IUser>(this.baseUrl + "/" + _id));
  }
};