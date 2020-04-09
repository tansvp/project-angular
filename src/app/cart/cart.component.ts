import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { CartService } from '../cart.service';
import { CompileShallowModuleMetadata } from '@angular/compiler';
@Component ({
    selector: 'app-cart',
    templateUrl: './cart.component.html',
    styleUrls: ['./cart.component.css']
})

export class CartComponent implements OnInit {
    
    items;
    checkoutForm;
    constructor(
        private cartService: CartService,
        private formBuilder: FormBuilder
    ) {
        
        this.items=this.cartService.getItems();
        
        this.checkoutForm=this.formBuilder.group({
            name: '',
            address: ''
        });
    }
    
    onSubmit(customerData) {
        console.warn('Your order has been submitted', customerData);
        
        this.items = this.cartService.clearCart(); /*เมื่อข้อมูลถูกส่ง จะมีการรีเซตค่า */
        this.checkoutForm.reset();  /*จะมีการรีเซตฟอร์ม */ 
    }
        


    ngOnInit() {
        this.items = this.cartService.getItems();
    }
}
