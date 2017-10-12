import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { AuthService } from '../providers/auth-service';
import { SplitPane } from '../providers/split-pane';
import { Common } from '../providers/common';
import { HttpModule } from "@angular/http";
import { Welcome } from '../pages/welcome/welcome';
import { Login } from '../pages/login/login';
import { Signup } from '../pages/signup/signup';
import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { DetailPage } from '../pages/detail/detail';
import { AccountPage } from '../pages/account/account';
import { FinancePage } from '../pages/finance/finance';
import { NewsPage } from '../pages/news/news';
import { SellingPage } from '../pages/selling/selling';
import { TransactionPage } from '../pages/transaction/transaction';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { Push } from '@ionic-native/push';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { MomentModule } from 'angular2-moment';
import { LinkyModule } from 'angular-linky';
//import { Navigator } from '../providers/navigator/navigator';

@NgModule({
  declarations: [
    MyApp,
    Welcome,
    Login,
    Signup,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
	DetailPage,
	AccountPage,
	FinancePage,
	NewsPage,
	SellingPage,
	TransactionPage
  ],
  imports: [
    BrowserModule,HttpModule,MomentModule,LinkyModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    Welcome,
    Login,
    Signup,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
	DetailPage,
	AccountPage,
	FinancePage,
	NewsPage,
	SellingPage,
	TransactionPage
  ],
  providers: [
    StatusBar,
    SplashScreen,AuthService,SplitPane,Common,
	Push,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
   // Navigator
  ]
})
export class AppModule {}
