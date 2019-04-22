import { Renderer2 } from '@angular/core';

export class WidgetToolbar {
  // instance
  private static _parentInstance:any;

  /**
   * 添加工具栏
   */
  public static appendChild(renderer:Renderer2,parent:any) {
    // remove old element
    const oldChild = document.getElementById('toolbarInstance');
    if(oldChild) {
      renderer.removeChild(this._parentInstance,oldChild);
    }

    // create new element
    const element = renderer.createElement('div');
    renderer.setAttribute(element,'id','toolbarInstance');
    renderer.addClass(element,'toolbar');

    // drag button
    const dragItem = renderer.createElement('div');
    renderer.setAttribute(dragItem,'id','drag');
    renderer.addClass(dragItem,'toolbar-item');
    renderer.addClass(dragItem,'iconfont');
    renderer.addClass(dragItem,'icondrag');

    // remove button
    const removeItem = renderer.createElement('div');
    renderer.setAttribute(removeItem,'id','remove');
    renderer.addClass(removeItem,'toolbar-item');
    renderer.addClass(removeItem,'iconfont');
    renderer.addClass(removeItem,'icondelete');

    renderer.appendChild(element,dragItem);
    renderer.appendChild(element,removeItem);

    this._parentInstance = parent;
    renderer.appendChild(parent,element);
  }
}
