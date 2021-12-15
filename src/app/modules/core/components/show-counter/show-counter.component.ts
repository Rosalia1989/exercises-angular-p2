import { Component, OnInit } from '@angular/core';
import { CounterService } from 'src/app/shared/counter.service';


@Component({
  selector: 'app-show-counter',
  templateUrl: './show-counter.component.html',
  styleUrls: ['./show-counter.component.css']
})
export class ShowCounterComponent implements OnInit {
  counter!:number;

  constructor(private counterService:CounterService) { }

  ngOnInit(): void {
    this.counterService.getCounter().subscribe(response=> this.counter = response);

  }
}
