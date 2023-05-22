import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { WeatherService } from 'src/app/services/weather.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {

  searchForm: FormGroup;
  city: any = {};

  cityWeather: any ;

  constructor(private weatherService: WeatherService) { }

  ngOnInit() {
   
  }

  search() {

    this.weatherService.searchWeatherByCity(this.city).subscribe((data) => {
     
      this.cityWeather = data.result;

      console.log("here",this.cityWeather.feels_like);

    });
   
  }

}
