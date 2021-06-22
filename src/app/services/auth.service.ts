import { query } from "@angular/animations";
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({ providedIn: 'root' })
export class AuthService {
  constructor(
    private http: HttpClient
  ) { }

  /**
   * 登录账号
   * @param username 用户名
   * @param password 密码
   * @returns
   */
  public async login(username: string, password: string) {
    return await this.http.post('/auth/login', { username, password }).toPromise();
  }

  /**
   * 注册账号
   * @param username 用户名
   * @param password 密码
   * @returns
   */
  public async register(username: string, password: string) {
    return await this.http.post('/auth/register', { username, password });
  }

  /**
   * 注销
   */
  public logout() {

  }
}
