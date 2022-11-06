import { Component, OnInit } from '@angular/core';
import { Todoe } from '../intefaces/todoe';
import { TodoserviceService } from '../services/todoservice.service';

@Component({
  templateUrl: './todo.todo.html',
  styleUrls: ['./todo.todo.scss'],
})
export class TodoTodo implements OnInit {
  listodo: Todoe[] = [];
  completed!: boolean;
  textTask!: string;

  constructor(private todoService: TodoserviceService) {}

  ngOnInit(): void {
    //setInterval(()=>){
    this.listodo = this.todoService.newtodoarr;
    this.textTask = this.todoService.title;
    this.completed = this.todoService.completed;
  }

  addtodo(txt: string) {
    this.todoService.onCreateTask(txt);
    this.textTask = '';
  }
  onCompleted(obj: Todoe) {
    this.todoService.getCompletedTask(obj);
  }
}
