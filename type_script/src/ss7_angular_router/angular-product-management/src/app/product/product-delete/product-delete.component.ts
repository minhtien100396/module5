import {Component, OnInit} from '@angular/core';
import {Product} from "../../../model/product";
import {ActivatedRoute, Params, Router} from "@angular/router";
import {ProductService} from "../../../service/product.service";

@Component({
  selector: 'app-product-delete',
  templateUrl: './product-delete.component.html',
  styleUrls: ['./product-delete.component.css']
})
export class ProductDeleteComponent implements OnInit {
  productId: number | undefined;
  product: Product | undefined;

  constructor(private _activatedRoute: ActivatedRoute,
              private _productService: ProductService,
              private _router: Router) {
  }

  ngOnInit(): void {
    console.log(this._productService.products);
    this._activatedRoute.params.subscribe((param: Params) => {
      this.productId = param.id;
      console.log(this.productId);
      this.product = this._productService.findById(this.productId);
      console.log(this.product);
      this._productService.setMess('Xóa Sản Phẩm ' + this.product.name + ' Thành Công');
      this._productService.remove(this.product);
      this._router.navigateByUrl('/product/list');
    })
  }

}
