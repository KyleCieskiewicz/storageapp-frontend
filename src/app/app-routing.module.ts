import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StorageunitsComponent } from './storageunits/storageunits.component';
import { UserViewComponent } from './storageunits/user-view/user-view.component';
import { UnauthorizedComponent } from './storageunits/unauthorized/unauthorized.component';

const routes: Routes = [
  { path: 'admin', component: StorageunitsComponent},
  { path: 'user', component: UserViewComponent},
  { path: 'error', component: UnauthorizedComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
