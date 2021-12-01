import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OrderContainerComponent } from './modules/core/order/container/order-container/order-container.component';
import { UserContainerComponent } from './modules/core/user/container/user-container/user-container.component';
import { NotFoundComponent } from './modules/shared/not-found/not-found.component';

const routes: Routes = [
  { path:"users", component: UserContainerComponent },
  { path:"order", component: OrderContainerComponent },
  { path:"", component: UserContainerComponent },
  { path:"**", component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
