import { Component, OnInit } from '@angular/core';
import { CounterService } from 'src/app/shared/counter.service';

@Component({
  selector: 'app-edit-counter',
  templateUrl: './edit-counter.component.html',
  styleUrls: ['./edit-counter.component.css']
})
export class EditCounterComponent implements OnInit {
  value:number=1;

  constructor(private counterService:CounterService) { }

  ngOnInit() {
  }

  add(value:number) {
    return this.counterService.addCounter(value);
  }

  sub(value:number) {
    return this.counterService.subCounter(value);
  }
}