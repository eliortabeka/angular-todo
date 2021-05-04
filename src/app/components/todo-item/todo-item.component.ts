import {Component, Input, Output, EventEmitter} from '@angular/core';
import {TodoItemModal} from "../../todo-item";

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss']
})
export class TodoItemComponent {

  @Input() itemToDisplay: TodoItemModal;

  @Output() deleteThisItem$ = new EventEmitter(null);

  constructor() {
  }

  deleteItem(itemId) {
    this.deleteThisItem$.emit(itemId)
  }

  toggleDone() {
    this.itemToDisplay.done = !this.itemToDisplay.done;
  }

}
