import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { from, Observable, switchMap, of, map, filter, throwError } from "rxjs";
import { WeatherData, WeatherInfo } from "../models/weather.model";

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  mockedResponseTemp: WeatherInfo = {
    "version": "3.0",
    "user": "none_aretxalde",
    "dateGenerated": "2022-05-21T11:20:05Z",
    "status": "OK",
    "data": [
        {
            "parameter": "t_2m:C",
            "coordinates": [
                {
                    "lat": 52.520551,
                    "lon": 13.461804,
                    "dates": [
                        {
                            "date": "2022-05-21T11:20:05Z",
                            "value": 17.1
                        }
                    ]
                }
            ]
        }
    ]
  }
  mockedResponseHumidity: WeatherInfo = {
    "version": "3.0",
"user": "none_aretxalde",
"dateGenerated": "2022-05-21T13:49:27Z",
"status": "OK",
"data": [
{
"parameter": "relative_humidity_1000hPa:p",
"coordinates": [
{
"lat": 48.8566,
"lon": 2.3522,
"dates": [
{
"date": "2022-05-21T00:00:00Z",
"value": 69
}
]
}
]
}
]

  }
  mockedCompleteResponse: WeatherInfo = {
      "version": "3.0",
      "user": "none_aretxalde",
      "dateGenerated": "2022-05-21T14:01:12Z",
      "status": "OK",
      "data": [
      {
      "parameter": "t_2m:C",
      "coordinates": [
      {
      "lat": 52.520551,
      "lon": 13.461804,
      "dates": [
      {
      "date": "2022-05-21T14:01:11Z",
      "value": 18.2
      }
      ]
      }
      ]
      },
      {
      "parameter": "relative_humidity_1000hPa:p",
      "coordinates": [
      {
      "lat": 52.520551,
      "lon": 13.461804,
      "dates": [
      {
      "date": "2022-05-21T14:01:11Z",
      "value": 52.6
      }
      ]
      }
      ]
      }
      ]
  }
  constructor( private http: HttpClient){}

  getTemperature(): Observable<number> {
    const todayDate = new Date().toISOString() ;
    const url = `https://api.meteomatics.com/${todayDate}/t_2m:C/52.520551,13.461804/json`;
    return this.http.get<WeatherInfo>(url,  { headers: this._getHeaders() }).pipe(
   // return of(this.mockedResponseTemp) .pipe(
      switchMap((res) => {
        if (!res.data) {
          return throwError(res);
        } else {
          return from(res.data).pipe(
            filter (dato=> dato.parameter === 't_2m:C'),
            map((t)=>t.coordinates[0].dates[0].value )
          )
        }
      })
    );
  }

  getHumidity(): Observable<number> {
    const todayDate = new Date().toISOString() ;
    const url = `https://api.meteomatics.com/${todayDate}/relative_humidity_1000hPa:p/52.520551,13.461804/json`;
    return this.http.get<WeatherInfo>(url,  { headers: this._getHeaders() }).pipe(
   // return of(this.mockedResponseHumidity) .pipe(
      switchMap((res) => {
        if (!res.data) {
          return throwError(res);
        } else {
          return from(res.data).pipe(
            filter (dato=> dato.parameter === 'relative_humidity_1000hPa:p'),
            map((t)=>t.coordinates[0].dates[0].value )
          )
        }
      })
    );
  }

  getBoth(): Observable<WeatherData> {
    const todayDate = new Date().toISOString() ;
    const url = `https://api.meteomatics.com/${todayDate}/t_2m:C,relative_humidity_1000hPa:p/52.520551,13.461804/json`;
   console.log(url)
   return this.http.get<WeatherInfo>(url,  { headers: this._getHeaders() }).pipe(
  //  return of(this.mockedCompleteResponse) .pipe(
      switchMap((res) => {
        if (!res.data) {
          return throwError(res);
        } else {
          console.log(res.data)
          return res.data
        }
      })
    );
  }

  private _getHeaders(): HttpHeaders {
    const token = ''
    return new HttpHeaders({'Authorization':`Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJFUzI1NiJ9.eyJ2IjoxLCJ1c2VyIjoibm9uZV9hcmV0eGFsZGUiLCJpc3MiOiJsb2dpbi5tZXRlb21hdGljcy5jb20iLCJleHAiOjE2NTM1Njg0ODcsInN1YiI6ImFjY2VzcyJ9.7nUYmzZWERBFxsJSK4Y5IYS7mhkNacidcx_U4r-bl6c0y9F2oQYdPPGINqfbJ_nJFgbyXUSEFAYuZ7Rnw3FzzQ`}); // incluir token bueno, dura 2 días
  }

}
