import { Injectable } from "@angular/core";
import { BehaviorSubject } from 'rxjs';
import { IStatus } from '../interfaces/status.interface';
import { ContainerComponent } from '../components/widgets/container/container.component';
import { TabsComponent } from '../components/widgets/tabs/tabs.component';

@Injectable()
export class StageService {
  /** 数据 */
  public store:any[] = [];

  public status:IStatus = {
    selectedId: ''
  };

  /**
   * 配置信息
   */
  public configSubject: BehaviorSubject<any> = new BehaviorSubject<any>(null);

  /**
   * 返回组件
   * @param name
   */
  public getWidget(name:string) {
    return {
      container: ContainerComponent,
      tabs: TabsComponent
    }[name];

  }
}
