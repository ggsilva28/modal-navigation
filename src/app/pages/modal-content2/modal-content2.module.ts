import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModalContent2PageRoutingModule } from './modal-content2-routing.module';

import { ModalContent2Page } from './modal-content2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModalContent2PageRoutingModule
  ],
  declarations: [ModalContent2Page]
})
export class ModalContent2PageModule {}
