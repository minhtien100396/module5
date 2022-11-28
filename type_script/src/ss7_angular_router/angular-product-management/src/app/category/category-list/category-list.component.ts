import {Component, OnInit} from '@angular/core';
import {CategoryService} from "../../../service/category.service";
import {Category} from "../../../model/category";

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent implements OnInit {
  categoryList: Category[] | undefined;

  constructor(private _categoryService: CategoryService) {
  }

  ngOnInit(): void {
    this._categoryService.getAllCategorys().subscribe(
      data => {
        this.categoryList = data;
      }, error => {
        console.log('Lấy Đanh Sách Thất Bại');
      }, () => {
        console.log('Kết Thúc Lấy Danh Sách');
      }
    )
  }

}
