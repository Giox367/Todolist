import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodoTodo } from './todo/todo.todo';
import { CompletedCompleted } from './completed/completed.completed';

@NgModule({
  declarations: [AppComponent, TodoTodo, CompletedCompleted],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
