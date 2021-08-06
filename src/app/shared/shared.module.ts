import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";

import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzCollapseModule } from 'ng-zorro-antd/collapse';

const vendorModules = [
  NzLayoutModule,
  NzCollapseModule
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ...vendorModules
  ],
  exports: [
    CommonModule,
    FormsModule,
    ...vendorModules
  ]
})
export class SharedModule {}
