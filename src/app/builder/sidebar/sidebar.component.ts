import { Component, OnInit } from '@angular/core';
import { SidebarService } from './sidebar.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: '[app-sidebar]',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  constructor(
    public translate: TranslateService,
    public sidebarService: SidebarService
  ) {
    translate.addLangs(['en','zh']);
    translate.setDefaultLang('en');

    const browserLang = translate.getBrowserLang();
    translate.use(browserLang.match(/en|zh/) ? browserLang : 'zh');
  }


  ngOnInit() {

  }
}
