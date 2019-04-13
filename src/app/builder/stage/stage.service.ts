import { Injectable } from "@angular/core";

@Injectable()
export class StageService {
  /**
   * 模式
   */
  public mode: 'edit' | 'preview' = 'edit';
}
