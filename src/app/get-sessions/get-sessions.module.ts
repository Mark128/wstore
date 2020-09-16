import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GetSessionsPageRoutingModule } from './get-sessions-routing.module';

import { GetSessionsPage } from './get-sessions.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GetSessionsPageRoutingModule
  ],
  declarations: [GetSessionsPage]
})
export class GetSessionsPageModule {}
