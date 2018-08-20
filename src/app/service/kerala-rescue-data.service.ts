import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class KeralaRescueDataService {

  constructor(private http: HttpClient) { }

  public fetchDataFromKeralaRescueIn(page:number){
    const params = new HttpParams()
                    .append("q","*:*")
                    .append("start",""+page)
                    .append("rows","10")
                    .append("sort","last_modified desc");
    return this.http.get(environment.solrURL, {params: params});
  }
}
