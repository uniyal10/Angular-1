import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent implements OnInit {
  title: string
  @Output() addEvent: EventEmitter<any> = new EventEmitter()
  constructor() { }

  ngOnInit(): void {
  }

  addTodo() {
    const todo = {
      title: this.title,
      completed: false
    }
    this.addEvent.emit(todo)
  }

}
