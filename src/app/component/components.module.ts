import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { ModalComponent } from './template/modal/modal.component';

@NgModule({
    declarations: [
        ModalComponent
    ],
    exports: [
        ModalComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        IonicModule,
    ],
    schemas: [NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA],
})

export class ComponentsModule { }