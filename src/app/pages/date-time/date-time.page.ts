import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-date-time',
  templateUrl: './date-time.page.html',
  styleUrls: ['./date-time.page.scss'],
})
export class DateTimePage implements OnInit {

  fechaNaci = new Date(2017, 4, 4, 1, 0, 0, 0).toISOString();
  customPickerOptions;
  customDate;

  constructor() { 
    console.log(this.fechaNaci);
  }

  ngOnInit() {
    this.customPickerOptions = {
      buttons: [{
        text: 'Save',
        handler: (evento) => { 
          console.log('clicked save');
          console.log(evento)
        }
      },{
        text:'Log',
        handler: () => {
          console.log('Clicked Log. Do not dismiss');
          return false;
        }
      }]
    }
  }

  cambioFecha(event){
    console.log(event.detail.value)
  }

}
