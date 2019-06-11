import { Component } from "@angular/core";
import { SidebarService } from '../../services/sidebar.service';

@Component({
  selector: '[app-sidebar]',
  templateUrl: 'sidebar.component.html',
  styleUrls: ['sidebar.component.scss']
})
export class SidebarComponent {
  constructor(
    public service: SidebarService
  ) {}
}
