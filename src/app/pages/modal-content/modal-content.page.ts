import { Component, OnInit } from '@angular/core';

import { RouteService } from 'src/app/services/route.service';

import { NavController } from '@ionic/angular';

import { EventsService } from 'src/app/services/events.service';

import { ModalContent2Page } from '../modal-content2/modal-content2.page';

@Component({
  selector: 'app-modal-content',
  templateUrl: './modal-content.page.html',
  styleUrls: ['./modal-content.page.scss'],
})
export class ModalContentPage implements OnInit {

  constructor(
    private route: RouteService,
    private nav: NavController,
    private event: EventsService,
  ) { }

  ngOnInit() {
  }

  go() {
    this.event.publish('modal:push', {component: ModalContent2Page, properties: {title: 'Page Content 2'}})
    this.event.publish('modal:height', 400)
  }

  close() {
    this.event.publish('modal:close')
  }
}
