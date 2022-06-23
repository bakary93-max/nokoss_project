import {Component, Input, OnInit} from '@angular/core';
import {Product} from "../../models/product";
import {PRODUCTS} from "../../models/product_list";
import {ProductService} from "../../services/product.service";
//import {ensureOutputPaths} from "@angular-devkit/build-angular/src/utils/output-paths";

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  prod: Product[]= [];
  isDisplayModal : boolean = false;
  modalProduct : Product | undefined
  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    //this.prod = this.productService.getProducts()
    this.productService.getProducts()
      .then((products:Product[])=>{
        this.prod = products
      })
      .catch(()=>{
        this.prod = []
      })

  }
  handleDisplayProductViewModal(product: Product){
    if (product){
      this.isDisplayModal = true
      this.modalProduct = product
    }


  }
  handleCloseModal(){
      this.isDisplayModal = false
      this.modalProduct = undefined

    }


}
