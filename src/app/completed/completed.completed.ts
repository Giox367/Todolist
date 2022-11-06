import { Component, OnInit } from '@angular/core';
import { Todoe } from '../intefaces/todoe';
import { TodoserviceService } from '../services/todoservice.service';

@Component({
  templateUrl: './completed.completed.html',
  styleUrls: ['./completed.completed.scss'],
})
export class CompletedCompleted implements OnInit {
  constructor(private todoService: TodoserviceService) {}

  completedTasks: Todoe[] = [];

  ngOnInit(): void {
    this.completedTasks = this.todoService.completedarr;
  }
}
