import { Component, OnInit } from '@angular/core';

import { RouteService } from 'src/app/services/route.service';

@Component({
  selector: 'app-modal-content',
  templateUrl: './modal-content.page.html',
  styleUrls: ['./modal-content.page.scss'],
})
export class ModalContentPage implements OnInit {

  constructor(
    private route: RouteService,
  ) { }

  ngOnInit() {
  }

  go() {
    this.route.go('modal-content2', { modal: true, permission: 'dashboard.index' })
  }

  goBack() {
    this.route.go('home')
  }
}
