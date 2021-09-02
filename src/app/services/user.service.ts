import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({providedIn: 'root'})
export class UserService {
  constructor(
    private http: HttpClient
  ){}


  create():Observable<unknown> {
    return this.http.post('/user',null);
  }

  remove(id:string) {
    return this.http.delete(`/user/${id}`);
  }

  update(record:any) {

  }
}
