import { Component, OnInit } from '@angular/core';

//Services
import { RouteService } from 'src/app/services/route.service';

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
    this.route.go('modal-content', { modal: true, open: true })
  }
}
