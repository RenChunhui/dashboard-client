import { Component, OnInit } from '@angular/core';
import { StageService } from './stage.service';
import { DropEvent } from 'src/app/common/drag-drop/drop-event';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: '[app-stage]',
  templateUrl: './stage.component.html',
  styleUrls: ['./stage.component.scss']
})
export class StageComponent implements OnInit {
  // 是否处于一次拖拽过程
  private _hasDrag: boolean = false;

  constructor(
    public translate: TranslateService,
    public stageService: StageService
  ) {
    translate.addLangs(['en', 'zh']);
    translate.setDefaultLang('en');

    const browserLang = translate.getBrowserLang();
    translate.use(browserLang.match(/en|zh/) ? browserLang : 'zh');
  }

  ngOnInit() {
  }

  onDragOver(event) {
    console.log('event:', event.offsetY);
    if (!this._hasDrag) {
      // this.stageService.store.push(1);
      this._hasDrag = true;
    }
  }

  onDrop(event: DropEvent) {
    this._hasDrag = false;
    this.stageService.store.push([]);
    console.log('drop:', event);
  }
}
