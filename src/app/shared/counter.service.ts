import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CounterService {
  private counter:number = 0;

  constructor() { }

  getCounter(): any {
    if(this.counter >= 0) {
      return this.counter;
    } else {
      return console.log(new Error("Errore: è stato inserito un numero negativo"));
    }
  }

  addCounter(value:number): void {
    this.counter += value;
    return console.log(this.counter);
  }

  subCounter (value:number): void {
    this.counter-= value;
    return console.log(this.counter);
  }

}
