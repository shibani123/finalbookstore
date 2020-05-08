import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './bookstore/login/login.component';
import { HomeComponent } from './bookstore/home/home.component';
import { SigninComponent } from './bookstore/signin/signin.component';
import { ProjectFirstGuard } from './projectFirst.guard';
import { AdminIndexComponent } from './bookstore/admin-index/admin-index.component';
import { CustomerIndexComponent } from './bookstore/customer-index/customer-index.component';
import { CartDetailsComponent } from './bookstore/cart-details/cart-details.component';
import { CheckoutComponent } from './bookstore/checkout/checkout.component';

const routes: Routes = [
  {path:"home",component:HomeComponent,canActivate:[ProjectFirstGuard]},
  {path:"login",component:LoginComponent,canActivate:[ProjectFirstGuard]},
  {path:"signin",component:SigninComponent,canActivate:[ProjectFirstGuard]},
  {path:"admin-index",component:AdminIndexComponent,canActivate:[ProjectFirstGuard]},
  {path:"customer-index",component:CustomerIndexComponent,canActivate:[ProjectFirstGuard]},
  {path:"cart",component:CartDetailsComponent,canActivate:[ProjectFirstGuard]},
  {path:"checkout",component:CheckoutComponent,canActivate:[ProjectFirstGuard]},
  {path:"**",redirectTo:"/home"}
];

@NgModule({
  providers:[ProjectFirstGuard],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
