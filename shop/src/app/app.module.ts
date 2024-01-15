import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShopComponent } from './components/shop/shop.component';
import { ShopItemComponent } from './components/shop-item/shop-item.component';
import { ShopItemTextComponent } from './components/shop-item-text/shop-item-text.component';
import { ShopItemImageComponent } from './components/shop-item-image/shop-item-image.component';
import { ShopItemDetailsComponent } from './components/shop-item-details/shop-item-details.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {DataService} from "./services/data.service";
import { ShopItemPriceComponent } from './components/shop-item-price/shop-item-price.component';
import { SummaryPipe } from './pipes/summary.pipe';
import { SearchBarComponent } from './shared/search-bar/search-bar.component';
import {FormsModule} from "@angular/forms";
import { ShopHomeComponent } from './components/shop-home/shop-home.component';
import { FilterTextPipe } from './pipes/filter-text.pipe';
import { TextFormatDirective } from './directives/text-format.directive';
import { ShopItemDetailsTextComponent } from './components/shop-item-details-text/shop-item-details-text.component';
import { HomeComponent } from './components/home/home.component';
import {AuthService} from "./services/auth.service";
import {AuthInterceptor} from "./services/auth/auth.interceptor";
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ShopAddItemComponent } from './components/shop-add-item/shop-add-item.component';



@NgModule({
  declarations: [
    AppComponent,
    ShopComponent,
    ShopItemComponent,
    ShopItemTextComponent,
    ShopItemImageComponent,
    ShopItemDetailsComponent,
    ShopItemPriceComponent,
    SummaryPipe,
    SearchBarComponent,
    ShopHomeComponent,
    FilterTextPipe,
    TextFormatDirective,
    ShopItemDetailsTextComponent,
    HomeComponent,
    LoginComponent,
    SignupComponent,
    NavbarComponent,
    ShopAddItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    },
    DataService,
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
