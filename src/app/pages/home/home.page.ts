import { Component, OnInit } from '@angular/core';

//Services
import { RouteService } from 'src/app/services/route.service';

import { ModalContentPage } from './../modal-content/modal-content.page';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  constructor(
    private route: RouteService,
  ) { }

  ngOnInit() {
  }

  openModal() {
    this.route.goModal(ModalContentPage, { title: 'Content Page' })
  }

  goPage(){
    this.route.go('/modal-content')
  }
}
