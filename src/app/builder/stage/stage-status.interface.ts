import { Renderer2 } from '@angular/core';

export interface StageStatus {
  /**
   * 场景状态
   */
  stage?: 'edit' | 'preview';

  /**
   * 选中的元素 ID
   */
  selectedId?: string;
}
