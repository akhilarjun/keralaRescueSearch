import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class KeralaRescueDataService {

  constructor(private http: HttpClient) { }

  public fetchDataFromKeralaRescueIn(page:number){
    //https://recipe-solr.websurfed.com/solr/krescue10/select?q=*:*
    //assets/data/data-keralaRescueIn.json
    const params = new HttpParams()
                    .append("q","*:*")
                    .append("start",""+page)
                    .append("rows","10")
                    .append("sort","last_modified desc");
    return this.http.get('https://recipe-solr.websurfed.com/solr/krescue10/select', {params: params});
  }
}
