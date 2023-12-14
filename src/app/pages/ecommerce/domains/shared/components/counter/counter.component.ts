import { Component, Input, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [],
  templateUrl: './counter.component.html'
})
export class CounterComponent {
  @Input() duration : number = 0
  @Input() message : string = ''

  constructor(){

  }

  ngOnChanges(changes: SimpleChanges){
    console.log(changes)
  }
}
