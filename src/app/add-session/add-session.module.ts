import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddSessionPageRoutingModule } from './add-session-routing.module';

import { AddSessionPage } from './add-session.page';

@NgModule({
  imports: [
    IonicModule.forRoot(),
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    IonicModule,
    AddSessionPageRoutingModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  declarations: [AddSessionPage]
})
export class AddSessionPageModule {}
