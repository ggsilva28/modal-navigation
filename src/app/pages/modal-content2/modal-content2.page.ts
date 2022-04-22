import { Component, OnInit } from '@angular/core';

import { RouteService } from 'src/app/services/route.service';

import { EventsService } from 'src/app/services/events.service';

import { ModalContentPage } from 'src/app/pages/modal-content/modal-content.page';

@Component({
  selector: 'app-modal-content2',
  templateUrl: './modal-content2.page.html',
  styleUrls: ['./modal-content2.page.scss'],
})
export class ModalContent2Page implements OnInit {

  constructor(
    private route: RouteService,
    private event: EventsService,
  ) { }

  ngOnInit() {
  }

  go() {
    this.event.publish('modal:push', ModalContentPage)
  }


}
