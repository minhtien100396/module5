import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ProductListComponent} from './product/product-list/product-list.component';
import {ProductCreateComponent} from './product/product-create/product-create.component';
import {ProductDeleteComponent} from "./product/product-delete/product-delete.component";
import {ProductEditComponent} from "./product/product-edit/product-edit.component";
import {CategoryListComponent} from "./category/category-list/category-list.component";
import {TodoComponent} from "./todo/todo/todo.component";


const routes: Routes = [
  {path:'product/list',component:ProductListComponent},
  {path:'product/create',component:ProductCreateComponent},
  {path:'product/delete/:id',component:ProductDeleteComponent},
  {path:'product/edit/:id',component:ProductEditComponent},
  {path:'category/list',component:CategoryListComponent},
  {path:'todo',component:TodoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
