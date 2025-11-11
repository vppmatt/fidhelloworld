import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-greeting',
  imports: [],
  templateUrl: './greeting.component.html',
  styleUrl: './greeting.component.css'
})
export class GreetingComponent implements OnInit {

  readonly testUser = {name : "Matt", age: 21};

  ngOnInit(): void {
      console.log("in ngOnInit", this.testUser , this.name)
  }

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

  constructor() {
    console.log("this is the constructor" , this.name)
  }


}
