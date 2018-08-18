import { Component, OnInit } from '@angular/core';
import { KeralaRescueDataService } from './service/kerala-rescue-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  constructor(private dataService: KeralaRescueDataService){ }

  public rescueData: any;

  ngOnInit(){
    this.dataService.fetchDataFromKeralaRescueIn().subscribe(
      data => {
        this.rescueData = data;
      }
    );
  }
}
