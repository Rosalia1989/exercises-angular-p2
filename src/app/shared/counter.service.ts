import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CounterService {

  private counter : number = 0;
  counterSubject = new BehaviorSubject<number>(0); // chiedere perché ?!

  constructor() { }

  getCounter() {
    return this.counterSubject.asObservable();
  }

  addCounter (value: number = 1) : void {
    this.counterSubject.next(this.counter += value);
  }

  subCounter (value: number = 1) : any {
    if (this.counter < 1) {
      this.counterSubject.error(alert('Error'));
      } else this.counterSubject.next(this.counter-= value);
  }
}