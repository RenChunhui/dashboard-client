import { Injectable } from "@angular/core";
import { ContainerComponent } from '../widgets/components/container/container.component';
import { TabsComponent } from '../widgets/components/tabs/tabs.component';

@Injectable()
export class StageService {
  /** 数据 */
  public store:any[] = [];

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
