import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodosComponent } from './components/todos/todos.component';
import { TodoComponent } from './components/todo/todo.component';
import { HttpClientModule } from "@angular/common/http";
import { HeaderComponent } from './components/header/header.component'
@NgModule({
  declarations: [
    AppComponent,
    TodosComponent,
    TodoComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }