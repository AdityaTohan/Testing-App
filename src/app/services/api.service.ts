import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(
    private httpClient:HttpClient
  ) { }

  // getCountryList(){
  //   return this.httpClient.get<any>('https://www.google.com/')
  // }

  convertApi(data:any): Observable<any>{
    return this.httpClient.post('https://www.google.com/',data)
  }

}
