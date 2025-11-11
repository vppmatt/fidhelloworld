import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-person',
  imports: [],
  templateUrl: './person.component.html',
  styleUrl: './person.component.css'
})
export class PersonComponent implements OnChanges {

  @Input({required: true})
  name = "";

  @Input({required: true})
  salary = 0;

  @Output()
  resignation = new EventEmitter();

  ngOnChanges(changes: SimpleChanges): void {
      console.log("changes detected" , changes);
      if(changes["salary"] && !changes["salary"].firstChange) {
          console.log("old salary ", changes["salary"].previousValue)
      }
  }

  handleResignation() {
    this.resignation.emit();
  }

}
