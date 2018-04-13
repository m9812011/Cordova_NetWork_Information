import { Component } from '@angular/core';
import { NavController , ToastController} from 'ionic-angular';
import { Network } from '@ionic-native/network';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(private toast: ToastController, private network: Network, public navCtrl: NavController) {
    console.log("constructor");
  }

  // Runs when the page has loaded.
  ionViewDidEnter(){
    this.network.onConnect().subscribe(data => {
      console.log(data)
      this.displayNetworkUpdate(data.type);
    }, error => console.error(error));

    this.network.onDisconnect().subscribe(data => {
      this.displayNetworkUpdate(data.type);
      console.log(data)
    }, error => console.error(error));
  }

  public displayNetworkUpdate(connectionState: string){
    let networkType = this.network.type;
    this.toast.create({
      message: `You are now ${connectionState} via ${networkType}`,
      duration: 3000
    }).present();
  }

  // public checkNetworkState(): void{
  //   console.log("checkNetworkState()");

  // }

}
