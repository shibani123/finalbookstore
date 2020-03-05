import { Injectable } from "@angular/core";
import { Cart } from './cart.model';

@Injectable()
export class Order{
    public id: number;
    public name: string;
    public address: string;
    public city: string;
    public state: string;
    public country: string;
    public zip: string;
    public shipped: boolean;
    constructor(public cart: Cart){}
    
    clear() {
        this.id = this.name = this.address = this.state 
        = this.city = this.zip = this.country = null;
        this.shipped = false;
        //this.cart.clear();
    }
    // stringfyy(){
    //     this.cart.stringit();
    // }
}