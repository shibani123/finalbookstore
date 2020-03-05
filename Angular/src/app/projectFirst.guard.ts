import { Injectable } from '@angular/core';
import { Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { HomeComponent } from './bookstore/home/home.component';

@Injectable()
export class ProjectFirstGuard{
    private FN=true;//first navigation
    constructor(private router: Router){}
    canActivate(route: ActivatedRouteSnapshot,state: RouterStateSnapshot): boolean{
        if(this.FN){
            this.FN=false;
            if(route.component!=HomeComponent){
                this.router.navigateByUrl("/")
                return false;
            }
        }
        return true;
    }
}