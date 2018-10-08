import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { InvesteePage } from "../investee/investee";
import { AuthService } from "../home/apiservice";
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  Categories : any;
  constructor(public navCtrl: NavController, private authservice: AuthService) {
    this.authservice.categories().then(data=> {
          console.log(data);
          this.Categories = data;
    });
  }

  gotoInvestee(){
    this.navCtrl.push(InvesteePage);
  }
}
