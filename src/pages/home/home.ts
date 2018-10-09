import { Component } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';
import { InvesteePage } from "../investee/investee";
import { AuthService } from "../home/apiservice";
import { InvesteeapplyPage } from "../investeeapply/investeeapply";
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  Categories : any;
  constructor(public navCtrl: NavController, private authservice: AuthService, private modalCtrl: ModalController) {
    this.authservice.categories().then(data=> {
          console.log(data);
          this.Categories = data;
    });
  }

  gotoInvestee(){
    this.navCtrl.push(InvesteePage);
  }
  applyInvestee(){
     let modalpage = this.modalCtrl.create(InvesteeapplyPage);
     modalpage.present();
  }

}
