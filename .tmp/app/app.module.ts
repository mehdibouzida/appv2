import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';

// Import pages
import { HomePage } from '../pages/home/home';
import { EventCreatePage } from '../pages/event-create/event-create';
import { EventDetailPage } from '../pages/event-detail/event-detail';
import { EventListPage } from '../pages/event-list/event-list';
import { LoginPage } from '../pages/login/login';
import { ProfilePage } from '../pages/profile/profile';
import { ResetPasswordPage } from '../pages/reset-password/reset-password';
import { SignupPage } from '../pages/signup/signup';
import { DishListPage } from '../pages/dish-list/dish-list';
import { DishCreatePage } from '../pages/dish-create/dish-create';
import { DishDetailPage } from '../pages/dish-detail/dish-detail';
import { DishOrderPayPage } from '../pages/dish-order-pay/dish-order-pay';
import { MasterPage } from '../pages/master-page/master-page';
import { OrderListPage } from '../pages/order-list/order-list';
import { OrderActiveListPage } from '../pages/order-active-list/order-active-list';
import { OrderHistoryListPage } from '../pages/order-history-list/order-history-list';

// Import providers
import { AuthData } from '../providers/auth-data';
import { EventData } from '../providers/event-data';
import { ProfileData } from '../providers/profile-data';
import { DishData } from '../providers/dish-data';
import { OrderData } from '../providers/order-data';
import { GeolocationData } from '../providers/geolocation-data';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    EventCreatePage,
    EventDetailPage,
    EventListPage,
    LoginPage,
    ProfilePage,
    ResetPasswordPage,
    SignupPage,
    DishListPage,
    DishCreatePage,
    DishDetailPage,
    DishOrderPayPage,
    MasterPage,
    OrderListPage,
    OrderActiveListPage,
    OrderHistoryListPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    EventCreatePage,
    EventDetailPage,
    EventListPage,
    LoginPage,
    ProfilePage,
    ResetPasswordPage,
    SignupPage,
    DishListPage,
    DishCreatePage,
    DishDetailPage,
    DishOrderPayPage,
    MasterPage,
    OrderListPage,
    OrderActiveListPage,
    OrderHistoryListPage
  ],
  providers: [
    AuthData,
    EventData,
    ProfileData,
    DishData,
    OrderData,
    GeolocationData
  ]
})
export class AppModule {}
