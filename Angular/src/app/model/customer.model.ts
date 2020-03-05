import { Injectable } from "@angular/core";

@Injectable()
export class Customer{
    public id ?: number;
    public name ?: string="";
    public username ?: string="";
    public password ?: string="";
    public email ?: string="";
    public phone ?: string="";
    public actor?: string="";
}