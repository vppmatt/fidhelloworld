import { Component, ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { GreetingComponent } from './greeting/greeting.component';
import { SongListComponent } from './song-list/song-list.component';
import { PersonComponent } from './person/person.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, GreetingComponent, SongListComponent, PersonComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Song Library';
  readonly date : string = "today";

  person = "Jim";
  age =21;

  employee = {name : "Bryan", salary: 250000}

  @ViewChild("bryan")
  bryanComponent! : PersonComponent;

  @ViewChild("greeting")
  greetingComponent! : GreetingComponent;

  handleBirthday() {
    this.age++;
  }

  changeGreeting() {
      this.greetingComponent.message = "Hello";
      this.bryanComponent.salary *= 1.1;
  }

  resignNow() {
    this.employee.salary = 0;
  }

  constructor() {
    let name: string = 'Matt';
    name = "Matthew";

    const greeting = `Hello ${name} `;
    console.log(greeting);
    console.log(Number.MAX_SAFE_INTEGER + 2);


    const sum = 0.1 + 0.2;
    console.log(sum);

    let age : number | null;
    age = null;

    console.log(age ?? 0  + 1);

    // let person : string | null = null;

    // console.log(person?.toLowerCase())

    const name2 = "Matt";

    console.log( name == name2);
    console.log(name === name2);

    // !=  or !==

    if( name == null) {

    }

  }

}
