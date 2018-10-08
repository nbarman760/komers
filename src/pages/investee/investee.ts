import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SingleinvesteePage } from "../singleinvestee/singleinvestee";

/**
 * Generated class for the InvesteePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-investee',
  templateUrl: 'investee.html',
})
export class InvesteePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad InvesteePage');
  }
  gotoInvesteeDetail(){
    this.navCtrl.push(SingleinvesteePage);
  }

}
