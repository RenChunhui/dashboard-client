import { Injectable } from "@angular/core";
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class EventService {
  /**
   * 渲染
   */
  public renderSubject: BehaviorSubject<any> = new BehaviorSubject<any>(null);
}
