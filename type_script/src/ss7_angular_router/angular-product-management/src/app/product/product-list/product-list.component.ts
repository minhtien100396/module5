import {Component, OnInit} from '@angular/core';
import {ProductService} from '../../../service/product.service';
import {Product} from '../../../model/product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  productList: Product[] | undefined;
  mess: string;

  constructor(private _productService: ProductService) {
  }

  ngOnInit(): void {
    this._productService.getListProducts().subscribe(
      data => {
        this.productList = data;
        this.mess = this._productService.mess;
      }, error => {
        console.log('Lấy Đanh Sách Thất Bại');
      }, () => {
        console.log('Kết Thúc Lấy Danh Sách');
      }
    )
  }

}
