import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class KeralaRescueDataService {

  constructor(private http: HttpClient) { }

  public fetchDataFromKeralaRescueIn(){
    return this.http.get('assets/data/data-keralaRescueIn.json');
  }
}
