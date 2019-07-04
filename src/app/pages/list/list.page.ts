import { DataService } from './../../services/data.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';
import { IonList, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPage implements OnInit {

  @ViewChild('lista') listado:IonList;
  usuarios:Observable<any>;

  constructor(private data: DataService, private toastCtrl: ToastController) { }

  ngOnInit() {
    this.usuarios = this.data.getUsers();
  }

  async presentToast(message:string){
    const toast = await this.toastCtrl.create({
      message,
      duration:2000
    });
    toast.present();
  }

  favorite(user){
    this.presentToast('favorite');
    this.listado.closeSlidingItems();
  }

  share(user){
    this.presentToast('share');
    this.listado.closeSlidingItems();
  }

  delete(user){
    this.presentToast('delete');
    console.log('delete',user);
  }
}
