import { Component, OnInit } from '@angular/core';
import { KeralaRescueDataService } from './service/kerala-rescue-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  host: {
    class: 'block'
  }
})
export class AppComponent implements OnInit{
  constructor(private dataService: KeralaRescueDataService){ }

  public rescueData: any[] = [];
  public totalRecords: number;
  public pageNo: number;
  public paginatorQuota: number;
  public currentPageNumber: number = 0;
  public paginatorButtons = new Array(10).fill(0);
  public pageNumToJump;
  public errorMsg:string = '';
  public dataLoaded = false;

  public loadData(currPage:number){
    this.currentPageNumber = currPage;
    this.dataLoaded = false;
    this.dataService.fetchDataFromKeralaRescueIn((currPage*10)).subscribe(
      data => {
        const resp = data['response'];
        this.totalRecords = resp['numFound'];
        this.rescueData = resp['docs'];
        this.paginatorQuota = Math.ceil(this.totalRecords/10);
        if(this.totalRecords%10 == 0){
          this.paginatorQuota--;
        }
        this.dataLoaded = true;
      },
      err => {
        this.errorMsg = err.message;
        this.dataLoaded = true;
      }
    );
  }

  ngOnInit(){
    this.loadData(this.currentPageNumber);
  }

  public loadNextPage = function(){
    this.currentPageNumber++;
    this.loadData(this.currentPageNumber);
  }

  public loadPreviousPage = function(){
    this.currentPageNumber && this.currentPageNumber--;
    this.loadData(this.currentPageNumber);
  }

  public jumpToPage = function(pageNum: number){
    pageNum && Number(pageNum) && this.loadData(--pageNum);
  }

  public openTab = function(latLong: any){
    window.open("https://maps.google.com/?q="+latLong);
  }
}
