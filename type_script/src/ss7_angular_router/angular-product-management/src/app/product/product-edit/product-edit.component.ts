import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {ActivatedRoute, Params, Router} from "@angular/router";
import {Product} from "../../../model/product";
import {ProductService} from "../../../service/product.service";

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {
  rfProduct: FormGroup;
  productId: number | undefined;
  product: Product | undefined;

  constructor(private _formBuilder: FormBuilder,
              private _activatedRoute: ActivatedRoute,
              private _productService: ProductService,
              private _router: Router) {
  }

  ngOnInit(): void {
    this._activatedRoute.params.subscribe((param: Params) => {
      this.productId = param['id'];
      console.log(this.productId);
      this._productService.findById(this.productId).subscribe(
        data => {
          this.product = data;
          console.log(data);
          this.rfProduct = this._formBuilder.group({
            id: [this.product.id],
            name: [this.product.name],
            price: [this.product.price],
            description: [this.product.description]
          });
        }
      );

    })
  }

  onEdit() {
    if (this.rfProduct.valid) {
      this._productService.updateProduct(this.productId, this.rfProduct.value).subscribe(
        data => {
          this.product = data;
          this._productService.setMess('Chỉnh Sửa Sản Phẩm ' + this.product.name + ' Thành Công');
          this._router.navigateByUrl('/product/list');
        }
      );
    }
  }
}
