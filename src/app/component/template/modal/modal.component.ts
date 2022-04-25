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
    title: '',
    height: 600
  };

  public canGoBack = false;
  public pageStack = []

  @ViewChild('modalNavigation', { static: true }) myNav: IonNav;

  constructor(
    private event: EventsService,
    private modalCtr: ModalController,
  ) {

    this.event.subscribe('modal:push', (data: modalPushProperties) => {
      console.log('modal:push')
      this.properties = { ...this.properties, ...data.properties }
      data.properties = this.properties
      this.pushToNav(data)
      this.setHeight()
    })

    this.event.subscribe('modal:pop', (data: modalPushProperties) => {
      console.log('modal:pop')
      this.popFromNav()
      this.setHeight()
    })

    this.event.subscribe('modal:close', () => {
      console.log('modal:close')
      this.modalCtr.dismiss()
    })

    this.event.subscribe('modal:destroy', () => {
      console.log('modal:destroy')
      this.pageStack = []
      this.properties = {
        title: 'Modal',
        height: 600
      };

      this.setHeight()
      this.event.destroy('modal:push')
      this.event.destroy('modal:pop')
      this.event.destroy('modal:close')
      this.event.destroy('modal:destroy')
    })
  }

  ngOnInit() {
    this.checkCanGoBack()
    this.myNav.animation = customAnimation;
    this.myNav.setRoot(this.rootPage);
  }

  private setHeight() {
    const root = document.documentElement;
    root.style.setProperty('--modal-component-height', this.properties.height + 'px');
  }

  private pushToNav(data) {
    this.pageStack.push(data)
    if (data.component) {
      this.myNav.push(data.component)
    }

    this.checkCanGoBack()
  }

  private popFromNav() {
    const previousPage = this.pageStack[this.pageStack.length - 2]
    if (previousPage) {
      this.properties = previousPage.properties
    }

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
    console.log(this.pageStack)
    if (this.pageStack.length > 1) {
      this.canGoBack = true
    } else {
      this.canGoBack = false
    }
  }
}
