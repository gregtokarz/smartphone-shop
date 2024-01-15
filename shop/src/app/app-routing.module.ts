import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ShopComponent} from "./components/shop/shop.component";
import {ShopHomeComponent} from "./components/shop-home/shop-home.component";
import {ShopItemDetailsComponent} from "./components/shop-item-details/shop-item-details.component";
import {HomeComponent} from "./components/home/home.component";
import {AuthGuard} from "./services/auth.guard";
import {LoginComponent} from "./components/login/login.component";
import {SignupComponent} from "./components/signup/signup.component";
import {ShopAddItemComponent} from "./components/shop-add-item/shop-add-item.component";

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'shop',
    component: ShopHomeComponent,

  },
  {
    path: 'blog/detail/:id',
    component: ShopItemDetailsComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'signup',
    component: SignupComponent
  },
  {
    path: 'add',
    component: ShopAddItemComponent,
    canActivate: [AuthGuard]
  }



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
