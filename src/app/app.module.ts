import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavbarComponent } from './modules/shared/navbar/navbar.component';
import { UserContainerComponent } from './modules/core/user/container/user-container/user-container.component';
import { UserSingleComponent } from './modules/shared/user-single/user-single.component';
import { UserDetailComponent } from './modules/core/user/components/user-detail/user-detail.component';
import { UserListComponent } from './modules/core/user/components/user-list/user-list.component';
import { OrderContainerComponent } from './modules/core/order/container/order-container/order-container.component';
import { OrderListComponent } from './modules/core/order/components/order-list/order-list.component';
import { OrderSingleComponent } from './modules/core/order/components/order-single/order-single.component';
import { OrderDetailComponent } from './modules/core/order/components/order-detail/order-detail.component';
import { NotFoundComponent } from './modules/shared/not-found/not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    UserContainerComponent,
    UserSingleComponent,
    UserDetailComponent,
    UserListComponent,
    OrderContainerComponent,
    OrderListComponent,
    OrderSingleComponent,
    OrderDetailComponent,
    NotFoundComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
