import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  componentes:Componente[] = [
    {
      icon: 'american-football',
      name: 'Action-sheet',
      redirectTo: '/action-sheet'
    },
    {
      icon: 'appstore',
      name: 'Alert',
      redirectTo: '/alert'
    },
    {
      icon: 'card',
      name: 'Cards',
      redirectTo: '/card'
    },
    {
      icon: 'beaker',
      name: 'Avatar',
      redirectTo: '/avatar'
    },
    {
      icon: 'radio-button-on',
      name: 'Botones y router',
      redirectTo: '/botones'
    },
    {
      icon: 'checkmark-circle-outline',
      name: 'Checkbox',
      redirectTo: '/check'
    },
    {
      icon: 'calendar',
      name: 'DateTime',
      redirectTo: '/date-time'
    },
    {
      icon: 'car',
      name: 'Fabs',
      redirectTo: '/fab'
    },
    {
      icon: 'tablet-portrait',
      name: 'Popover',
      redirectTo: '/popover'
    }
  ]

  constructor() { }

  ngOnInit() {
  }

}

interface Componente {
  icon:string;
  name:string;
  redirectTo:string;
}
