import {Component, OnInit} from '@angular/core';
import {TodoService} from "../../../service/todo.service";
import {Todo} from "../../../model/Todo";
import {FormBuilder, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  toDoList: Todo[] | undefined;
  rfTodo: FormGroup;

  constructor(private _todoService: TodoService,
              private _formBuilder: FormBuilder) {
  }

  ngOnInit(): void {
    this.rfTodo = this._formBuilder.group({
      content: [''],
      complete: [true]
    });
    this._todoService.getAllTodo().subscribe(
      data => {
        this.toDoList = data;
        console.log(data);
      }
    )
  }

  deleteTask(id: number) {
    this._todoService.remove(id).subscribe(() => {
      this._todoService.getAllTodo().subscribe(data => {
        this.toDoList = data;
      });
    });
  }

  createTask() {
    if (this.rfTodo.value.content) {
      this._todoService.createTask({
        content: this.rfTodo.value.content,
        complete: this.rfTodo.value.complete
      }).subscribe(todo => {
        this._todoService.getAllTodo().subscribe(data => {
          this.toDoList = data;
        });
      });
    }
  }

  doTask(item: Todo) {
    item.complete = !item.complete;
    this._todoService.update(item).subscribe(value => {
      this._todoService.getAllTodo().subscribe(data => {
        this.toDoList = data;
      });
    });
  }
}
