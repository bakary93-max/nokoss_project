import { Component, OnInit } from '@angular/core';
import {ProductService} from "../../services/product.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  data: Number | undefined
  second: Number | undefined
  constructor(private productService: ProductService) {
  }

  ngOnInit(): void {
    /*this.productService.getNumber()
      .subscribe((value) => {
        this.data = value
      })

  }*/
    this.productService.getSecond()
      .subscribe((value) => {
        this.second = value
      })
  }
}
