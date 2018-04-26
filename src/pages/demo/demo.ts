import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
/*import "pixi";
import "p2";*/
import 'pixi';
import 'p2';
import * as Phaser from "phaser-ce";



/**
 * Generated class for the DemoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-demo',
  templateUrl: 'demo.html',
})
export class DemoPage {

  private game:Phaser;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DemoPage');
    this.game = new Phaser.Game(800, 600, Phaser.AUTO, 'game', null)
  }



  

}
