import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-mapa-ferias',
  templateUrl: './mapa-ferias.page.html',
  styleUrls: ['./mapa-ferias.page.scss'],
})
export class MapaFeriasPage implements OnInit {

  loading: any;

  constructor(private loadingCtrl: LoadingController) { }

  ngOnInit() {
    
    this.presentLoading('Espere');

    setTimeout(() => {
      this.loading.dismiss();

    }, 1500);

  }

  async presentLoading( mensaje: string) {
    this.loading = await this.loadingCtrl.create({
      message: mensaje,
      //duration: 2000
    });
    await this.loading.present();

   // const { role, data } = await this.loading.onDidDismiss();

    console.log('Loading dismissed!');
  }

  async presentLoadingWithOptions() {
    const loading = await this.loadingCtrl.create({
      spinner: null,
      duration: 5000,
      message: 'Please wait...',
      translucent: true,
      cssClass: 'custom-class custom-loading'
    });
    return await loading.present();
  }



}
