import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { InvesteePage } from './investee';

@NgModule({
  declarations: [
    InvesteePage,
  ],
  imports: [
    IonicPageModule.forChild(InvesteePage),
  ],
})
export class InvesteePageModule {}
