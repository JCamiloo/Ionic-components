import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.page.html',
  styleUrls: ['./card.page.scss'],
})
export class CardPage implements OnInit {
 
   
    text:string = " Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem accusamus eligendi dolor velit repellat enim molestiae optio libero vitae non aliquam, sit provident, facilis quaerat voluptatibus soluta numquam animi natus?"
  constructor() { }

  ngOnInit() {
  }

}
