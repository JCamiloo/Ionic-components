import { DataService } from './../../services/data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.page.html',
  styleUrls: ['./searchbar.page.scss'],
})
export class SearchbarPage implements OnInit {

  albumes:any[] = [];
  textoBuscar = '';

  constructor(private data: DataService) {}

  ngOnInit() {
    this.data.getAlbumes().subscribe(data => this.albumes = data);
  }

  buscar(event){
    this.textoBuscar = event.detail.value;
  }

}
