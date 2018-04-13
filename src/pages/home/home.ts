import { Component } from '@angular/core';
import { NavController , ToastController} from 'ionic-angular';
import { Network } from '@ionic-native/network';

import { Subscription } from 'rxjs/Subscription';
import { SettingsPage } from '../settings/settings';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  connected: Subscription;
  disconnected: Subscription;

  constructor(private toast: ToastController, private network: Network, public navCtrl: NavController) {
    console.log("constructor");
  }

  navigateToSettings(){
    this.navCtrl.push(SettingsPage);
  }

  public displayNetworkUpdate(connectionState: string){
    let networkType = this.network.type;
    this.toast.create({
      message: `You are now ${connectionState} via ${networkType}`,
      duration: 3000
    }).present();
  }

  // Runs when the page has loaded.
  ionViewDidEnter(){
    this.connected = this.network.onConnect().subscribe(data => {
      console.log(data);
      this.displayNetworkUpdate(data.type);
    }, error => console.error(error));

    this.disconnected = this.network.onDisconnect().subscribe(data => {
      console.log(data);
      this.displayNetworkUpdate(data.type);
    }, error => console.error(error));
  }

  // Runs when the page is about to leave and no longer be the active page.
  ionViewWillLeave(){
    // this.connected.unsubscribe();
    // this.disconnected.unsubscribe();
  }

}
