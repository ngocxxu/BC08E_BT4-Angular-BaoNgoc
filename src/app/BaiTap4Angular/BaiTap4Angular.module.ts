import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { BaiTap4AngularComponent } from './BaiTap4Angular.component';


@NgModule({
  imports: [CommonModule,FormsModule,RouterModule],
  exports: [BaiTap4AngularComponent],
  declarations: [BaiTap4AngularComponent],
  providers: [],
})
export class BaiTap4AngularModule { }
