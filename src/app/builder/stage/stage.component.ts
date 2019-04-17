import { Component, OnInit } from '@angular/core';
import { StageService } from './stage.service';
import { DropEvent } from 'src/app/common/drag-drop/drop-event';

@Component({
  selector: '[app-stage]',
  templateUrl: './stage.component.html',
  styleUrls: ['./stage.component.scss']
})
export class StageComponent implements OnInit {
  // 是否处于一次拖拽过程
  private _hasDrag:boolean = false;

  constructor(
    public stageService:StageService
  ) { }

  ngOnInit() {
  }

  onDragOver(event) {
    console.log('event:',event.offsetY);
    if(!this._hasDrag) {
      // this.stageService.store.push(1);
      this._hasDrag = true;
    }
  }

  onDrop(event:DropEvent) {
    this._hasDrag = false;
    this.stageService.store.push([]);
    console.log('drop:', event);
  }
}
