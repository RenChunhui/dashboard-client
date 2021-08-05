import { Component, Input, OnInit } from "@angular/core";
import { TableSercie } from "./table.service";

@Component({
  selector: 'ngx-table',
  templateUrl: 'table.component.html'
})
export class TableComponent implements OnInit {
  @Input() url:string = '';


  constructor(
    private service:TableSercie
  ){}

  /** @override */
  ngOnInit(){

  }

  private async findByAll() {

  }
}
