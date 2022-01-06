import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class CovidService {
  numberProperties!:number;
  properties!:string[];

  constructor(private readonly http: HttpClient ) { }

  getTotalNumberOfProperties() {
    return this.http.get<any>('https://api.covid19api.com/')
    .pipe(
      map(response => this.numberProperties = Object.keys(response).length)
    );
    
  }

  getProperties() {
    return this.http.get<any>('https://api.covid19api.com/')
    .pipe(
      map(response => this.properties = Object.keys(response))
    );
  }



}