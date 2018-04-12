import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { Network } from '@ionic-native/network';

import {} from ''

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, public network: Network) {

  }

  public checkNetworkState(): void{
    console.log("checkNetworkState()");
  }

}
