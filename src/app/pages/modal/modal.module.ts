import { ModalInfoPageModule } from './../modal-info/modal-info.module';
import { ModalInfoPage } from './../modal-info/modal-info.page';
import { ComponentsModule } from './../../components/components.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ModalPage } from './modal.page';

const routes: Routes = [
  {
    path: '',
    component: ModalPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentsModule,
    ModalInfoPageModule,
    RouterModule.forChild(routes)
  ],
  entryComponents: [
    ModalInfoPage
  ],
  declarations: [
    ModalPage
  ]
})
export class ModalPageModule {}
