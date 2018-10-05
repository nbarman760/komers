import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { InvesteePage } from "../investee/investee";
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }
  pushpage(){
    this.navCtrl.push(InvesteePage);
  }

}
