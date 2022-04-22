import { Component, OnInit, ViewChild, SimpleChanges } from '@angular/core';
import { NavController, IonNav, NavParams } from '@ionic/angular';

import { ModalController } from '@ionic/angular';

import { EventsService } from 'src/app/services/events.service';

import { customAnimation } from 'src/app/animations/modal';

export interface modalProperties {
  title: string;
  height: number;
}

export interface modalPushProperties {
  component: any;
  properties?: modalProperties;
}

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent implements OnInit {

  public rootPage;
  public properties: modalProperties = {
    title: 'Modal',
    height: 500
  };

  public canGoBack = false;
  public pageStack = []

  @ViewChild('modalNavigation', { static: true }) myNav: IonNav;

  constructor(
    private event: EventsService,
    private modalCtr: ModalController,
  ) {
    
    this.event.subscribe('modal:push', (data: modalPushProperties) => {
      this.pushToNav(data.component)
      this.properties = { ...this.properties, ...data.properties }
      this.resetHeight()
    })

    this.event.subscribe('modal:pop', () => {
      this.popFromNav()
      this.resetHeight()
    })

    this.event.subscribe('modal:height', (height) => {
      const root = document.documentElement;
      root.style.setProperty('--modal-component-height', height + 'px');
    })

    this.event.subscribe('modal:close', () => {
      this.modalCtr.dismiss()
      this.resetHeight()
    })

  }

  ngOnInit() {
    this.checkCanGoBack()
    this.myNav.animation = customAnimation;
    this.myNav.setRoot(this.rootPage);
  }

  private resetHeight() {
    console.log(this.properties)
    const root = document.documentElement;
    root.style.setProperty('--modal-component-height', 500 + 'px');
  }

  private pushToNav(page) {
    this.pageStack.push(page)
    this.myNav.push(page)

    this.checkCanGoBack()
  }

  private popFromNav() {
    this.pageStack.pop()
    this.myNav.pop()

    this.checkCanGoBack()
  }

  close() {
    this.event.publish('modal:close')
  }

  goBack() {
    this.event.publish('modal:pop')
  }

  async checkCanGoBack() {
    if (this.pageStack.length > 0) {
      this.canGoBack = true
    } else {
      this.canGoBack = false
    }
  }
}
