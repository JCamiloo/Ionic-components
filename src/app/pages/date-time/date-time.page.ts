import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-date-time',
  templateUrl: './date-time.page.html',
  styleUrls: ['./date-time.page.scss'],
})
export class DateTimePage implements OnInit {

  fecha:string = '2019-06-13T01:00:10.395-05:00';
  fechaCompleta:string = new Date().toISOString();
  customPickerOptions;
  customDate;

  constructor() {
    console.log(this.fecha);
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
