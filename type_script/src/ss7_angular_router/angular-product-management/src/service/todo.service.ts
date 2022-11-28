import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Todo} from "../model/Todo";
import {environment} from "../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor(private _httpClient: HttpClient) {
  }

  getAllTodo(): Observable<Todo[]> {
    return this._httpClient.get<Todo[]>(environment.API_URL_TODO);
  }

  remove(id: number): Observable<void> {
    return this._httpClient.delete<void>(environment.API_URL_TODO + '/' + id);
  }

  createTask(todo: { content: string[]; complete: any }): Observable<Todo> {
    return this._httpClient.post<Todo>(environment.API_URL_TODO, todo);
  }

  update(todo: Todo): Observable<Todo> {
    return this._httpClient.put<Todo>(environment.API_URL_TODO + '/' + todo.id, todo);
  }
}
