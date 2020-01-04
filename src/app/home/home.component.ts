import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { DataService } from '../_services/data.service';

@Component({ templateUrl: 'home.component.html' })
export class HomeComponent implements OnInit {
    products: any = [];
    displayedColumns: string[] = ['name', 'quantity'];
 
   constructor(private dataService: DataService) {
   
   }
   
   ngOnInit(){
       
   }
   get_products() {
     const promise = new Promise((resolve, reject) => {
       this.dataService.get_products()
         .toPromise()
         .then(
           res => { // Success
             this.products = res;
             resolve();
           }
         );
     });
     return promise;
   }
 
}
