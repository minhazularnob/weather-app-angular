import { Component } from '@angular/core';
import { WeatherService } from './weather.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  cityName = '';
  weatherData: any;
  errorMessage = '';

  constructor(private weatherService: WeatherService){}

  getWeather() {
    this.weatherService.getWeather(this.cityName).subscribe({
      next: (data) => {
        this.weatherData = data;
        this.errorMessage = '';
      },
      error: (error) => {
        this.errorMessage = 'City not found!';
        this.weatherData = null;
      }
    });
  }
  
}
