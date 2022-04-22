import { Component, OnInit } from '@angular/core';

import { RouteService } from 'src/app/services/route.service';

@Component({
  selector: 'app-modal-content2',
  templateUrl: './modal-content2.page.html',
  styleUrls: ['./modal-content2.page.scss'],
})
export class ModalContent2Page implements OnInit {

  constructor(
    private route: RouteService,
  ) { }

  ngOnInit() {
  }

  go() {
    this.route.go('modal-content', { modal: true })
  }

  goBack() {
    this.route.go('modal-content', { modal: true })
  }
}
