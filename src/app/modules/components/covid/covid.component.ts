import { Component, OnInit } from '@angular/core';
import { CovidService } from '../../shared/covid.service';

@Component({
  selector: 'app-covid',
  templateUrl: './covid.component.html',
  styleUrls: ['./covid.component.css']
})
export class CovidComponent implements OnInit {
  numberOfProperties!:number;
  properties!:string[];

  constructor(private readonly covidService:CovidService) { }

  ngOnInit(): void {
   this.covidService.getTotalNumberOfProperties().subscribe(response => this.numberOfProperties = response);
   this.covidService.getProperties().subscribe(response => this.properties = response);
  }

}
