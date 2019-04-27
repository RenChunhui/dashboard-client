import { Injectable, Renderer2 } from "@angular/core";
import { BehaviorSubject } from 'rxjs';
import { StageStatus } from './stage-status.interface';
import { WidgetConfig } from '../widgets/widget.interface';

@Injectable()
export class StageService {
  /**
   * 模式
   */
  public mode: 'edit' | 'preview' = 'edit';

  /**
   * 表单数据
   */
  public store: any[] = [];

  /**
   * 状态管理
   */
  public mapStatus: StageStatus = {
    stage: 'edit',
    selectedId: ''
  }

  /**
   * 舞台状态
   */
  public stageSubject: BehaviorSubject<string> = new BehaviorSubject<string>('');

  /**
   * 配置
   */
  public configSubject: BehaviorSubject<WidgetConfig> = new BehaviorSubject<WidgetConfig>(null);

  /**
   * 表单样式风格
   */
  public builderStyleSubject: BehaviorSubject<string> = new BehaviorSubject<string>('modern');
}
