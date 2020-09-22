import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Todo } from "../../models/Todo"
import { TodoService } from "../../services/todo.service"
@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  @Input() todo: Todo
  @Output() deleteTodo: EventEmitter<Todo> = new EventEmitter()
  constructor(private todoService: TodoService) { }

  ngOnInit(): void {
  }
  applyClass() {
    let classes = {
      'isCompleted': this.todo.completed
    }
    return classes
  }
  onToggle(todo: Todo) {
    //toggle in ui
    todo.completed = !todo.completed
    //toggle on server
    this.todoService.toggleCompleted(todo).subscribe(todo => {
      console.log(todo)
    })

  }
  onDelete(todo: Todo) {
    this.deleteTodo.emit(todo)

  }

}
