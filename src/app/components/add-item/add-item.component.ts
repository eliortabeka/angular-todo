import {Component, OnInit, Output, EventEmitter} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.scss']
})
export class AddItemComponent implements OnInit {

  @Output() taskTitle$ = new EventEmitter(null);

  form: FormGroup;


  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      task: ['', [Validators.required, Validators.minLength(3)]]
    })
  }

  addTask() {
    if (this.form.valid) {
      this.taskTitle$.emit(this.form.value.task)
    } else {
      alert('Please add task first')
    }
  }

}
