import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-greeting',
  imports: [],
  templateUrl: './greeting.component.html',
  styleUrl: './greeting.component.css'
})
export class GreetingComponent {

  @Input({required : true})
  name! : string;

  @Input({required: true})
  age! : number;

  @Input()
  message = "hello";

  @Output()
  birthday = new EventEmitter();

  incrementAge() {
    this.birthday.emit();
  }
}
