import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GetSessionsPage } from './get-sessions.page';

const routes: Routes = [
  {
    path: '',
    component: GetSessionsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GetSessionsPageRoutingModule {}
