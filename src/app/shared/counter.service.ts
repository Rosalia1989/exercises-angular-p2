import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CounterService {
  private counter:number = 0;
  counterSubject = new BehaviorSubject<number>(this.counter);

  constructor() { }

  getCounter():Observable<number>{
  return this.counterSubject.asObservable();
  }

  addCounter(value:number) {
    this.counterSubject.next(this.counter+=value);
    return this.counterSubject.asObservable;
  }

  subCounter(value:number) {
    if(this.counter < value) {
      return alert("You cannot enter a negative number");
    } else {
      return this.counterSubject.next(this.counter-=value);      
    } 
  }
}