import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http"
import { Observable } from 'rxjs';
import { Todo } from "../models/Todo"

const httpHeaders = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  url = 'http://jsonplaceholder.typicode.com/todos'
  constructor(private http: HttpClient) { }


  getTodos(): Observable<Todo[]> {
    return this.http.get<Todo[]>(this.url)
  }
  toggleCompleted(todo: Todo): Observable<any> {
    const url = `${this.url}/${todo.id}`
    return this.http.put(url, todo, httpHeaders)

  }
  deleteTodo(todo: Todo): Observable<any> {
    const url = `${this.url}/${todo.id}`
    return this.http.delete(url, httpHeaders)
  }


}
