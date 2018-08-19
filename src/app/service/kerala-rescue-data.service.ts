import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class KeralaRescueDataService {

  constructor(private http: HttpClient) { }

  public fetchDataFromKeralaRescueIn(page:number){
    //https://recipe-solr.websurfed.com/solr/krescue10/select?q=*:*
    //assets/data/data-keralaRescueIn.json
    return this.http.get('https://recipe-solr.websurfed.com/solr/krescue10/select?q=*:*&start='+page+'&rows=10&sort=last_modified%20desc');
  }
}
