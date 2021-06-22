import { HttpClient } from '@angular/common/http';
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(
    private http: HttpClient
  ) {}

  /**
   * 增-用户
   */
  public async create() {
    return await this.http.post('',{}).toPromise();
  }

  /**
   * 删-用户
   * @param id 用户 id
   */
  public async remove(id:string) {
    return await this.http.delete('/users/').toPromise();
  }

  /**
   * 改-用户
   */
  public async update() {
    return await this.http.patch('',{}).toPromise();
  }

  /**
   * 查-用户
   * @param id
   */
   public async findById(id:string) {
    return await this.http.post('',{id}).toPromise();
  }
}
