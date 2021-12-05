import { Component, OnInit } from '@angular/core';
import { CounterService } from 'src/app/shared/counter.service';
import { getJSDocReturnTag } from 'typescript';

@Component({
  selector: 'app-edit-counter',
  templateUrl: './edit-counter.component.html',
  styleUrls: ['./edit-counter.component.css']
})
export class EditCounterComponent implements OnInit {
  valueDefault!:number;

  constructor(private counterService:CounterService) { }

  ngOnInit() {
    return this.valueDefault=this.counterService.default;
  }

  add() {
   return this.counterService.addCounter(this.valueDefault);
  }

  sub() {
    return this.counterService.subCounter(this.valueDefault);
  }

}
