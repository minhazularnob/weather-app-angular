import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  apiKey = 'c0436b8de71c2c2f60052e8dfcfd8f9d';

  constructor(private http: HttpClient) { }

  getWeather(city: string) {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${this.apiKey}&units=metric`;
    return this.http.get(url);
  }
}