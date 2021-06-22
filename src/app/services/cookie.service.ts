import { Injectable } from "@angular/core";

@Injectable({ providedIn: 'root' })
export class CookieService {

  /**
   * 设置 cookie
   * @param key
   * @param value
   * @param expire 多少分钟到期，默认 1 天
   */
  public set(key: string, value: string, expire:number=1440):void {
    const date = new Date();

    date.setTime(date.getTime() + (expire * 60 * 1000));

    document.cookie = key + "=" + value + "; expires=" + date.toUTCString() + "; path=/";
  }

  /**
   * 获取 cookie
   * @param key
   * @returns
   */
  public get(key: string):string {
    const value = "; " + document.cookie;
    const parts = value.split("; " + key + "=");

    return ((parts.length === 2 && parts.pop()?.split(";").shift()) || "");
  }

  /**
   * 删除 cookie
   * @param key
   */
  public remove(key: string) {
    const date = new Date();
    // Set it expire in -1 days
    date.setTime(date.getTime() + (-1 * 24 * 60 * 60 * 1000));

    document.cookie = key + "=; expires=" + date.toUTCString() + "; path=/";
  }
}
