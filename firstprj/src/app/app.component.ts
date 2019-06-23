import { Component } from '@angular/core';
import { Model } from './model'

@Component({
  selector: 'todo-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  model = new Model();

  getName() {
    return this.model.user;
  }

  getTodoItems() {
    // console.log("getTodoItems was fired!"); // вызывается несолкько раз, когда пользователь меняет флажки. И при старте приложения.
    return this.model.items;
  }

}
