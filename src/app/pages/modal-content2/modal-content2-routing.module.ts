import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModalContent2Page } from './modal-content2.page';

const routes: Routes = [
  {
    path: '',
    component: ModalContent2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModalContent2PageRoutingModule {}
