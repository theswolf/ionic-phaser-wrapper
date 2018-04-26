import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { DemoPage } from '../demo/demo';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  demoPage() {
    this.navCtrl.push(DemoPage)
  }

}
