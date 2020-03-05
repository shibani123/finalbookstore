
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';
import { BookRepository } from './book.repository';
import { CustomerRepository } from './customer.repository';


import { StaticBookDataSource } from './static.bookdatasource';

import { Customer } from './customer.model';
import { RestDataSource } from './rest.datasource';
import { Cart } from './cart.model';
import { Order } from './order.model';
import { OrderRepository } from './order.repository';
import { Promotion } from './promotion.model';
import { PromotionRepository } from './promotion.repository';
import { Book } from './book.model';

@NgModule({
    providers:[Book,BookRepository,CustomerRepository,Promotion,PromotionRepository,Customer,Cart,Order,OrderRepository,RestDataSource,{ provide: StaticBookDataSource, useClass: RestDataSource}],
    imports:[HttpClientModule]
})

export class ModelModule{}