import { Injectable } from '@angular/core';

import { Todoe } from '../intefaces/todoe';
@Injectable({
  providedIn: 'root',
})
export class TodoserviceService {
  newtodoarr: Todoe[] = [];
  id = 0;
  title = '';
  completed = false;

  completedarr: Todoe[] = [];

  constructor() {}

  onCreateTask(text: string) {
    this.id++;
    let index = this.id;

    let doneTsk = this.completed;
    this.title = text;
    this.newtodoarr.push({ id: index, title: text, completed: doneTsk });
  }

  getCompletedTask(obj: Todoe) {
    obj.completed = true;
    console.log(obj);

    this.completedarr.push(obj);
  }
}
