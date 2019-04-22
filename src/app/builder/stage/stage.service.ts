import { Injectable, Renderer2 } from "@angular/core";
import { StageStatus } from './stage-status.interface';

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
    selectedId: ''
  }
}
