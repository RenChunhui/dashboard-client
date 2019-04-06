import { Directive, Input, HostListener } from "@angular/core";

@Directive({ selector: '[ngDrop]' })
export class NgDropDirective {
  /**
     * 定义拖动效果
     * `copy` 表明被拖动的数据将从它原本的位置拷贝到目标的位置
     * `move` 表明被拖动的数据将被移动
     * `link` 表明在拖动源位置和目标位置之间将会创建一些关系表格或是连接
     */
  @Input() effect: 'copy' | 'move' | 'link' = 'copy';

  @HostListener('dragover',['$event'])
  private onDragOverHandler(event) {
    event.preventDefault();
    event.dataTransfer.dropEffect = this.effect;
  }

  @HostListener('drop',['$event'])
  private onDropHandler(event) {
    event.preventDefault();
  }
}
