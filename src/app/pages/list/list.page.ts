import { DataService } from './../../services/data.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';
import { IonList } from '@ionic/angular';

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPage implements OnInit {

  @ViewChild('lista') listado:IonList;
  usuarios:Observable<any>;

  constructor(private data: DataService) { }

  ngOnInit() {
    this.usuarios = this.data.getUsers();
  }

  favorite(user){
    console.log('favorite',user);
    this.listado.closeSlidingItems();
  }

  share(user){
    console.log('share',user);
    this.listado.closeSlidingItems();
  }

  delete(user){
    console.log('delete',user);
  }
}
