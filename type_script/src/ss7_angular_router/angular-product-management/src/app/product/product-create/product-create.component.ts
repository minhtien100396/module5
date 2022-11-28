import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {ProductService} from '../../../service/product.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {
  rfProduct: FormGroup;

  constructor(private _formBuilder: FormBuilder,
              private _productService: ProductService,
              private _router: Router) {
  }

  ngOnInit(): void {
    this.rfProduct = this._formBuilder.group({
      id: [],
      name: [],
      price: [],
      description: []
    });
  }

  onSubmit() {
    if (this.rfProduct.valid) {
      this._productService.save(this.rfProduct.value).subscribe(
        data => {
          this._router.navigateByUrl('product/list');
          this._productService.setMess('Thêm Sản Phẩm ' + this.rfProduct.value.name + ' Thành Công');
          // this.rfProduct.reset(); /*Thêm mới và trả lại trang create đã Reset*/
        });
    }
  }
}
