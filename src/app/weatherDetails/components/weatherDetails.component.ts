import { Component, OnInit } from '@angular/core';
import { WeatherDetailsService } from '../services/weatherDetails.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'weather-details-component',
  template: `
              <div class="mainContent">

                <div *ngFor="let object of weatherDetails">
                  <h2>Weather in {{ object.city.name }} on 5 days</h2>
                  
                  <!--<div class="weatherByDate" *ngFor="let ">-->
                    <!---->
                  <!--</div>-->
                  
                </div>
              
              </div>
            `,
  providers: [ WeatherDetailsService ]
})

export class WeatherDetailsComponent implements OnInit {
  id: number;
  subscription: any;
  private weatherDetails: Object[] = [];
  private weatherByDate: Object[] = [];
  private eachDataByHour: any;
  private sortedWeatherData: Object[] = [];

  constructor(private weatherDetailsService: WeatherDetailsService, private route: ActivatedRoute) {}

  ngOnInit() {
    this.subscription = this.route.params.subscribe(params => {
      this.id = +params['id'];

      this.weatherDetailsService.getDetailsWeather(this.id.toString())
        .retry(5)
        .subscribe(
          weatherDetails => {
            this.weatherDetails.push(weatherDetails);
            console.log(this.weatherDetails);

            // console.log(this.weatherDetails[0].list[0].dt_txt);
            // var startIndex = this.weatherDetails[0].list[0].dt_txt.search(/\s/);
            // var cuttedDate = this.weatherDetails[0].list[0].dt_txt.slice(0, startIndex);
            // console.log(cuttedDate);
            //
            // for(var i = 0; i < this.weatherDetails.length; i++) {
            //   //console.log(this.weatherDetails[i].list);
            //   console.log(this.weatherDetails[i].list.length);
            //
            //   //this.sortedWeatherData.push(this.weatherDetails[i].list);
            //   this.eachDataByHour = this.weatherDetails[i].list;
            // }
            //
            // for(var j = 0; j < this.eachDataByHour.length; i++) {
            //   console.log(this.eachDataByHour[j]);
            // }


          },
          error => {
            console.log(error);
          }
        );
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
