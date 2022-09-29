import { Component } from '@angular/core';
import {SelectItem} from 'primeng/api';
import {SelectItemGroup} from 'primeng/api';
import { ApiService } from './services/api.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

interface Currency {
  name: any;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Demo';
  currencyFrom:any;
  currencyTo:any;
  value='';
  countryList = [];
  currency: Currency[];
  response: any;
  


  constructor(
    private formBuilder:FormBuilder,
    private apiService:ApiService,
  ){
   

        this.currency = [
          {name: 'USD'},
          {name: 'INR'},
          {name: 'EUR'},
          {name: 'UK'},
          {name: 'CNY'},
          {name: 'YEN'}
      ];

  }
  
  convert(){
    let obj={
      currencyFrom: this.currencyFrom.name,
      currencyTo: this.currencyTo.name,
      value: this.value,
    }
    console.log(obj)
    this.apiService.convertApi(obj).subscribe(
      response => {
        this.response=response;
      }
    )
  }
}


