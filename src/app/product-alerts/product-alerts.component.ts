import { Component,OnInit } from '@angular/core';
import { Input } from '@angular/core' ;
import { Output,EventEmitter } from '@angular/core'

@Component ({
    selector: 'app-product-alerts',   /*ชื่อของ Component */
    templateUrl: './product-alerts.component.html',
    styleUrls: ['./product-alerts.component.css']
})

export class ProductAlertsComponent implements OnInit {  /*การสร้าง class*/
    
    @Input() product;
    @Output() notify = new EventEmitter();
    constructor() {

    }

    ngOnInit(){

    }


}