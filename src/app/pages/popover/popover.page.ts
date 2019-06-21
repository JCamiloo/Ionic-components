import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { PopinfoComponent } from 'src/app/components/popinfo/popinfo.component';

@Component({
  selector: 'app-popover',
  templateUrl: './popover.page.html',
  styleUrls: ['./popover.page.scss'],
})
export class PopoverPage implements OnInit {

  constructor(private popCtrl:PopoverController) { }

  ngOnInit() {
  }

  async fnMostrarPop(event){
    const popover = await this.popCtrl.create({
      component: PopinfoComponent,
      //event: event,
      mode: 'ios',
      backdropDismiss:false
    });
    await popover.present();

    const { data } = await popover.onDidDismiss(); 
    console.log('padre',data);
  }
}
