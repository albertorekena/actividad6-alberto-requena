import {Injectable, inject} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {lastValueFrom} from "rxjs";
import {IUser} from "../interfaces/iuser";

type ApiIndexResponse = {
  page:number;
  per_page:number;
  total:number;
  total_pages:number;
  results:IUser[];
};

@Injectable({
  providedIn:"root"
})
export class UsersService {
  private baseUrl:string = "https://peticiones.online/api/users";
  private httpClient = inject(HttpClient);

  index():Promise<ApiIndexResponse> {
    return lastValueFrom(this.httpClient.get<ApiIndexResponse>(this.baseUrl));
  }
};