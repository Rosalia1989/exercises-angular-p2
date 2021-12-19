import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { Beer } from './beer-model';
import { beerList } from './mock-data';
import { map } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class BeersService {

  private beers: Beer[] = beerList;
  beersSubject = new BehaviorSubject<Beer[]>(this.beers);


  constructor() { }

  getBeers(): Observable<Beer[]> {
    return this.beersSubject.asObservable();
  }

  getBeerById(id: number): Observable<Beer | undefined> {
    return this.beersSubject.pipe(
      map((response: Beer[]) => response.find((beer: Beer) => beer.id === id))
    )
  }

}