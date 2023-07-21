import { Injectable } from '@angular/core';
import {Product} from "../models/product";
import {resolve} from "@angular/compiler-cli";
import {interval, Observable, of} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  products : Product[] = [
   {
    name: "Nokoss fait maison2",
    description: "Nokoss fait maison3",
    sold_price : 7,
    regular_price: 15,
    imageUrl: ["/assets/images/products/nokoss1.jpg"],
  },
   {
    name: "Nokoss fait maison",
    description: "Nokoss fait maison",
    sold_price : 27,
    regular_price: 47,
    imageUrl: ["/assets/images/products/nokosss.png"],
  },
    {
    name: "Nokoss fait maison2",
    description: "Nokoss fait maison3",
    sold_price : 7,
    regular_price: 15,
    imageUrl: ["/assets/images/products/nokoss1.jpg"],
  },
   {
    name: "Nokoss fait maison",
    description: "Nokoss fait maison",
    sold_price : 27,
    regular_price: 47,
    imageUrl: ["/assets/images/products/nokosss.png"],
  },
    {
    name: "Nokoss fait maison2",
    description: "Nokoss fait maison3",
    sold_price : 7,
    regular_price: 15,
    imageUrl: ["/assets/images/products/nokoss1.jpg"],
  },
   {
    name: "Nokoss fait maison",
    description: "Nokoss fait maison",
    sold_price : 27,
    regular_price: 47,
    imageUrl: ["/assets/images/products/nokosss.png"],
  },
    {
    name: "Nokoss fait maison2",
    description: "Nokoss fait maison3",
    sold_price : 7,
    regular_price: 15,
    imageUrl: ["/assets/images/products/nokoss1.jpg"],
  },
   {
    name: "Nokoss fait maison",
    description: "Nokoss fait maison",
    sold_price : 27,
    regular_price: 47,
    imageUrl: ["/assets/images/products/nokosss.png"],
  },
    {
    name: "Nokoss fait maison2",
    description: "Nokoss fait maison3",
    sold_price : 7,
    regular_price: 15,
    imageUrl: ["/assets/images/products/nokoss1.jpg"],
  },
   {
    name: "Nokoss fait maison",
    description: "Nokoss fait maison",
    sold_price : 27,
    regular_price: 47,
    imageUrl: ["/assets/images/products/nokosss.png"],
  },
    {
    name: "Nokoss fait maison2",
    description: "Nokoss fait maison3",
    sold_price : 7,
    regular_price: 15,
    imageUrl: ["/assets/images/products/nokoss1.jpg"],
  }, {
    name: "Nokoss fait maison",
    description: "Nokoss fait maison",
    sold_price : 27,
    regular_price: 47,
    imageUrl: ["/assets/images/products/nokosss.png"],
  },
    {
    name: "Nokoss fait maison2",
    description: "Nokoss fait maison3",
    sold_price : 7,
    regular_price: 15,
    imageUrl: ["/assets/images/products/nokoss1.jpg"],
  }, {
    name: "Nokoss fait maison",
    description: "Nokoss fait maison",
    sold_price : 27,
    regular_price: 47,
    imageUrl: ["/assets/images/products/nokosss.png"],
  },
    {
    name: "Nokoss fait maison2",
    description: "NokossaisonBAKARYYYYYYY",
    sold_price : 7,
    regular_price: 15,
    imageUrl: ["/assets/images/products/nokoss1.jpg"],
  },
  ]


  constructor() { }

  getProducts():Promise<Product[]>{
    return new Promise((resolve, reject)=>{
      if(this.products.length){
        resolve(this.products)
      } else {
        reject([])
      }
    })

  }

  getNumber(): Observable<Number>{
    return of(45)

  }

  getSecond(): Observable<Number>{
    return interval(1000)
  }

  addProduct(product: Product){

  }

  editProduct(_id: string, product: Product){

  }
}
