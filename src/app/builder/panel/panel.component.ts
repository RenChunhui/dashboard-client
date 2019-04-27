import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { WidgetConfig } from '../widgets/widget.interface';
import { StageService } from '../stage/stage.service';

declare var $;

@Component({
  selector: '[app-panel]',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.scss']
})
export class PanelComponent implements OnInit {
  public config:WidgetConfig;
  public keys = Object.keys;

  constructor(
    public translate: TranslateService,
    private _stageService: StageService
  ) {
    translate.addLangs(['en', 'zh']);
    translate.setDefaultLang('en');

    const browserLang = translate.getBrowserLang();
    translate.use(browserLang.match(/en|zh/) ? browserLang : 'zh');
  }

  ngOnInit() {
    this._stageService.configSubject.subscribe(observer => {
      if(observer === null || observer === undefined) {
        this.config = null;

        return;
      }

      this.config = observer;

      // select first tab
      $('#nav-tab a:first-child').tab('show');
    })
  }

}
