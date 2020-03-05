import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ModelModule } from '../model/model.module';
import { SigninComponent } from './signin/signin.component';
import { LoginComponent } from './login/login.component';
import { AdminIndexComponent } from './admin-index/admin-index.component';
import { CustomerIndexComponent } from './customer-index/customer-index.component';
import { HomeComponent } from './home/home.component';
import { CartSummaryComponent } from '../cart-summary/cart-summary.component';
import { CartDetailsComponent } from '../cart-details/cart-details.component';
import { CheckoutComponent } from '../checkout/checkout.component';

@NgModule({
  declarations: [
    SigninComponent,
    LoginComponent,
    AdminIndexComponent,
    CustomerIndexComponent,
    HomeComponent,
    CartSummaryComponent,
    CartDetailsComponent,
    CheckoutComponent
  ],
  imports: [
    CommonModule,ModelModule,RouterModule,FormsModule,
  ],
  exports:[SigninComponent,
    LoginComponent,
    AdminIndexComponent,
    CustomerIndexComponent,
    HomeComponent,
    CartSummaryComponent,
    CheckoutComponent,
    CartDetailsComponent
  ],
    
})
export class BookStoreModule { }
