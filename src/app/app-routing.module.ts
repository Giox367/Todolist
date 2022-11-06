import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompletedCompleted } from './completed/completed.completed';
import { TodoTodo } from './todo/todo.todo';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'todo',
  },
  {
    path: 'todo',
    component: TodoTodo,
  },
  {
    path: 'completed',
    component: CompletedCompleted,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
