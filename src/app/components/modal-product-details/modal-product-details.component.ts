import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Product} from "../../models/product";

@Component({
  selector: 'app-modal-product-details',
  templateUrl: './modal-product-details.component.html',
  styleUrls: ['./modal-product-details.component.css']
})
export class ModalProductDetailsComponent implements OnInit {

  @Input() product: Product | undefined
  @Output() close: EventEmitter<any> = new EventEmitter<any>()
  constructor() { }

  ngOnInit(): void {
  }
  closeModal(){
    this.close.emit()
  }

}
