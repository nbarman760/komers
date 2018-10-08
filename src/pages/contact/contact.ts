import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {Validators, FormBuilder, FormGroup } from '@angular/forms';
@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {
  private todo : FormGroup;
  constructor(public navCtrl: NavController, private  formBuilder: FormBuilder) {
    this.todo = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', Validators.compose([Validators.required, Validators.email])],
      phone: ['',  Validators.required],
      message: ['',Validators.required]
    });
  }
  logForm(){
    console.log(this.todo.value)
  }
}
