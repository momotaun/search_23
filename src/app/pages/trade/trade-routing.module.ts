import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TradePage } from './trade.page';

const routes: Routes = [
  {
    path: '',
    component: TradePage
  },
  {
    path: 'contacts',
    loadChildren: () => import('./contacts/contacts.module').then( m => m.ContactsPageModule)
  },
  {
    path: 'profile',
    loadChildren: () => import('./profile/profile.module').then( m => m.ProfilePageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TradePageRoutingModule {}
