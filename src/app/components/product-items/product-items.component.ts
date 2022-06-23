import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Product} from "../../models/product";

@Component({
  selector: 'app-product-items',
  templateUrl: './product-items.component.html',
  styleUrls: ['./product-items.component.css']
})
export class ProductItemsComponent implements OnInit {

  @Input() product: Product | undefined
  @Output() deleteProductItem: EventEmitter<Product> = new EventEmitter<Product>()
  @Output() displayProductViewModal: EventEmitter<Product> = new EventEmitter<Product>()
  constructor() { }

  handleClickProduct(product: Product | undefined){
    this.displayProductViewModal.emit(product)
  }

  ngOnInit(): void {
  }

  deleteProduct(product: Product | undefined){
    this.deleteProductItem.emit(product)
  }
}
