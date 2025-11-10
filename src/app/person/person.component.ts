import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-person',
  imports: [],
  templateUrl: './person.component.html',
  styleUrl: './person.component.css'
})
export class PersonComponent {

  @Input({required: true})
  name = "";

  @Input({required: true})
  salary = 0;

  @Output()
  resignation = new EventEmitter();

  handleResignation() {
    this.resignation.emit();
  }

}
