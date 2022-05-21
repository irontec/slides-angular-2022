import { Component } from '@angular/core';
import { WeatherService } from '../services/weather.service';
import { WeatherData, WeatherInfo } from '../models/weather.model';
import {
  exhaustMap,
  mergeMap,
  Observable,
  of,
  pipe,
  switchMap,
  tap,
  throwError,
  map,
  filter,
  from,
  Subscription
} from 'rxjs';

@Component({
  selector: 'hello-world',
  template: `
  <div class="wrapper">
    <button *ngIf="!weatherChecked" mat-raised-button color="primary" (click)="checkTemperature()">
      Consultar temperatura
    </button>
    <button *ngIf="!weatherChecked" mat-raised-button color="primary" (click)="checkHumidity()">
      Consultar humedad
    </button>
    <button *ngIf="!weatherChecked" mat-raised-button color="primary" (click)="checkBoth()">
      Consultar tª y humedad
    </button>
    <div class="response" *ngIf="tempChecked">
      <h1>TEMPERATURA</h1>
      <p [highlight]="color" >La temperatura es de {{ temperatura$ | async }} ºC</p>
    </div>
    <div class="response" *ngIf="humidityChecked">
      <h1>HUMEDAD RELATIVA</h1>
      <p [highlight]="color" >La humedad relativa es de {{ humidity$ | async }} %</p>
    </div>
    <button *ngIf="weatherChecked" mat-raised-button color="primary" (click)="reset()">
      Volver a consultar
    </button>
  </div>
  `,
  styleUrls: ['./hello-world.component.scss'],
})
export class HelloWorldComponent {

  temperatura$: Observable<number>;
  humidity$: Observable<number>;
  data$: Observable<unknown>;
  weatherChecked: boolean = false;
  tempChecked: boolean = false;
  humidityChecked: boolean = false;
  color = 'yellow';

  constructor(
    private weatherService: WeatherService,
    ) {}

  checkTemperature() {
    this.temperatura$ = this.weatherService.getTemperature();
    this.weatherChecked = true;
    this.tempChecked = true;
    this.color = 'red'
  }
  checkHumidity() {
    this.humidity$ = this.weatherService.getHumidity();
    this.weatherChecked = true;
    this.humidityChecked = true;
    this.color = 'blue'
  }
  checkBoth() {
    this.temperatura$ = this.weatherService.getBoth().pipe(
      filter (dato=> dato.parameter === 't_2m:C'),
      map((t)=>t.coordinates[0].dates[0].value )
    );
    this.humidity$ = this.weatherService.getBoth().pipe(
      filter (dato=> dato.parameter === 'relative_humidity_1000hPa:p'),
      map((t)=>t.coordinates[0].dates[0].value )
    );
    this.weatherChecked = true;
    this.tempChecked = true;
    this.humidityChecked = true;
    this.color = 'green'
  }
  reset(){
    this.weatherChecked = false;
    this.tempChecked = false;
    this.humidityChecked = false;
    this.color = 'yellow'
  }
}
