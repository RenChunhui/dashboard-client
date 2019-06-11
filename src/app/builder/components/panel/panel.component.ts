import { Component, OnInit } from "@angular/core";
import { StageService } from '../../services/stage.service';

@Component({
  selector: '[app-panel]',
  templateUrl: 'panel.component.html'
})
export class PanelComponent implements OnInit {
  constructor(
    private _stageService: StageService
  ) { }

  ngOnInit() {
    this._stageService.configSubject.subscribe(observer => {
      if (observer === null) return;

      Object.keys(observer.config).map(item => {
        // console.log('item:', item);
      })
    })
  }
}
