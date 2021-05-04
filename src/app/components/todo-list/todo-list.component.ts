import {Component, EventEmitter, Input, Output} from '@angular/core';
import {TodoItemModal} from "../../todo-item";

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent {

  @Input() listToDisplay: TodoItemModal[];
  @Output() deleteThisItem$ = new EventEmitter(null);

  deleteItem($event) {
      this.deleteThisItem$.emit($event);
  }

}
