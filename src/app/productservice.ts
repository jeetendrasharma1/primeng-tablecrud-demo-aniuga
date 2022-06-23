import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of } from 'rxjs';

import { Product } from './product';

@Injectable()
export class ProductService {


    constructor(private http: HttpClient) { }


    getProducts() {
        let products: Product[] = [{ id: '1', name: "Jeetendra", email: "jeet@gmail.com", phone: "9131769676", role: "technician" },
        { id: '2', name: "Biswajit", email: "biswajit@gmail.com", phone: "9131769676", role: "technician" },
        { id: '3', name: "Mounica", email: "mounica@gmail.com", phone: "9131769676", role: "technician" },
        { id: '4', name: "Rahul", email: "rahul@gmail.com", phone: "9131769676", role: "technician" }
        ];
        return of(products);
    }

}