import {Injectable, inject} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {lastValueFrom} from "rxjs";
import {IUser, IUsers} from "../interfaces/iuser";
import {IError} from "../interfaces/ierror";

@Injectable({
  providedIn:"root"
})
export class UsersService {
  private baseUrl:string = "https://peticiones.online/api/users";
  private httpClient = inject(HttpClient);

  getBaseUrl():string {
    return this.baseUrl;
  }

  getAll(page:string | undefined = undefined):Promise<IUsers> {
    if (!page) {
      return lastValueFrom(this.httpClient.get<IUsers>(this.baseUrl));
    }

    return lastValueFrom(this.httpClient.get<IUsers>(this.baseUrl + "?page=" + page));
  }

  getById(_id:string):Promise<IUser | IError> {
    return lastValueFrom(this.httpClient.get<IUser>(this.baseUrl + "/" + _id));
  }

  store(user:IUser):Promise<IUser | IError> {
    return lastValueFrom(this.httpClient.post<IUser>(this.baseUrl, user));
  }

  update(_id:string, user:IUser):Promise<IUser | IError> {
    return lastValueFrom(this.httpClient.put<IUser>(this.baseUrl + "/" + _id, user));
  }

  delete(_id:string):Promise<IUser | IError> {
    return lastValueFrom(this.httpClient.delete<IUser>(this.baseUrl + "/" + _id));
  }
};