import { Component, OnInit } from '@angular/core';
import { Beer } from 'src/app/shared/beer-model';
import { BeersService } from 'src/app/shared/beer.service';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {
  beers!:Beer[]
  selectedBeer?:Beer;
  name!:string;
  type!:string;

  constructor(private readonly beerService: BeersService) { }

  ngOnInit(): void {
    this.beerService.getBeers()
    .subscribe(response => this.beers = response)
    .unsubscribe();
  }

  selectBeer(name:string, type:string) {
      this.beerService.selectBeer(name, type)
      .subscribe(response => this.selectedBeer = response
      ).unsubscribe()
  }

}
