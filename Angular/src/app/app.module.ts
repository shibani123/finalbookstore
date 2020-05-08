import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgIdleKeepaliveModule } from '@ng-idle/keepalive'; 

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './bookstore/login/login.component';
import { HomeComponent } from './bookstore/home/home.component';
import { SigninComponent } from './bookstore/signin/signin.component';
import { CustomerIndexComponent } from './bookstore/customer-index/customer-index.component';
import { AdminIndexComponent } from './bookstore/admin-index/admin-index.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BookStoreModule } from './bookstore/bookstore.module';
import { CartDetailsComponent } from './bookstore/cart-details/cart-details.component';
import { CheckoutComponent } from './bookstore/checkout/checkout.component';
// import { CartSummaryComponent } from './cart-summary/cart-summary.component';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    NgIdleKeepaliveModule.forRoot(),
    BrowserModule,  
    AppRoutingModule,
    BookStoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
