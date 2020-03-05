import { Injectable } from "@angular/core";
import { Promotion } from './promotion.model';
import { Observable } from 'rxjs';
import { StaticBookDataSource } from './static.bookdatasource';
import { RestDataSource } from './rest.datasource';
;

@Injectable()
export class PromotionRepository{
    promos:Promotion[]=[];
    constructor(private staticdatasource: StaticBookDataSource,private restDataSource: RestDataSource){
        staticdatasource.getpromo().subscribe(p=>{
            this.promos=p;
        });
    }

    savePromotion(promo : Promotion) : Observable<Promotion>{
        // console.log("Ka");
        return this.staticdatasource.savePromotion(promo);
    }
    getPromotion(promo: string):Promotion{
        return this.promos.find(p=>p.code==promo);
    }
    getallPromotion():Promotion[]{
        return this.promos;
    }

}