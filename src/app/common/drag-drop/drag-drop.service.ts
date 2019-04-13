import { Injectable } from "@angular/core";
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class NgDragDropService {
  /**
   * 定义拖动数据
   */
  public dragData:any;

  /**
   * 定义拖动范围
   */
  public dragScope:string;

  /**
   * 开始拖拽
   */
  public onDragStart:BehaviorSubject<any> = new BehaviorSubject<any>(null);

  /**
   * 结束拖拽
   */
  public onDragEnd:BehaviorSubject<any> = new BehaviorSubject<any>(null);
}
