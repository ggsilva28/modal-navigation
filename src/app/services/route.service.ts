import { Injectable } from '@angular/core';
import { Router, Navigation } from '@angular/router';

import { ModalController } from '@ionic/angular';
import { ModalComponent } from 'src/app/component/template/modal/modal.component';

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
    public modalController: ModalController
  ) { }

  async go(url: string, params: params = { modal: false, open: false }, e: any = null) {
    let route: any = [url]

    if (params.modal) {
      if (params.open) {
        const modal = await this.modalController.create({
          component: ModalComponent,
          cssClass: 'auto-height',
          animated: false,
          // enterAnimation: enterAnimation,
          // leaveAnimation: leaveAnimation,
        });

        await modal.present();
      }

      route = [{ outlets: { modal: url } }]
    } else {
      this.modalController.dismiss()
    }

    if (e) {
      if (e.ctrlKey) {
        return window.open(url, '_blank');
      }
    }

    this.router.navigate(route)
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
