import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { ModalController } from '@ionic/angular';
import { ModalComponent } from 'src/app/component/template/modal/modal.component';

import { EventsService } from './events.service';

export interface params {
  modal: boolean,
  open?: boolean,
  permission?: string
}

@Injectable({
  providedIn: 'root'
})

export class RouteService {

  constructor(
    private router: Router,
    public modalController: ModalController,
    public event: EventsService
  ) { }

  async go(url: any, params: params = { modal: false, open: false }, e: any = null) {
    if (e) {
      if (e.ctrlKey) {
        return window.open(url, '_blank');
      }
    }

    this.router.navigate([url])
  }

  async goModal(component, properties) {
    const modal = await this.modalController.create({
      component: ModalComponent,
      cssClass: 'auto-height',
      componentProps: {
        rootPage: component,
      }
    });

    await modal.present();

    this.event.publish('modal:push', { properties: properties })

    modal.onDidDismiss().then(() => {
      this.event.publish('modal:destroy')
    })
  }

  isActive(url) {
    if (this.router.url === '/') {
      return false
    }

    if (url === this.router.url) {
      return true
    }

    return false
  }

  currentUrl() {
    return this.router.url
  }
}
