import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { PopinfoComponent } from './popinfo/popinfo.component';
import { FormsModule } from '@angular/forms';
import { MenuComponent } from './menu/menu.component';

@NgModule({
  declarations: [
    HeaderComponent,
    MenuComponent,
    PopinfoComponent
  ],
  exports: [
    HeaderComponent,
    MenuComponent,
    PopinfoComponent
  ],
  imports: [
    IonicModule,
    FormsModule,
    CommonModule
  ]
})
export class ComponentsModule { }
