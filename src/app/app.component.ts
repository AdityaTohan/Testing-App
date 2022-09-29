import { Component } from '@angular/core';
import {SelectItem} from 'primeng/api';
import {SelectItemGroup} from 'primeng/api';
import { ApiService } from './services/api.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

interface Currency {
  name: string
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Demo';
  selectedCountryFrom= '';
  selectedCountryTo='';
  value='';
  countryList = [];
  currency: Currency[];
  response='';
  


  constructor(
    private formBuilder:FormBuilder,
    private apiService:ApiService,
  ){
   

        this.currency = [
          {name: '$ USD'},
          {name: '₹ INR'},
          {name: '€ EUR'},
          {name: '£ UK'},
          {name: '¥ CNY'},
          {name: '¥ YEN'}
      ];

  }

  // ngOnInit(){
  //   this.getCountryList();
  // }

  // getCountryList(){
  //   this.apiService.getCountryList().subscribe(
  //     response => {
  //       this.countryList = response;
  //     }
  //   );
  // }

  

  convert(){
    let obj={
      selectedCountryFrom: this.selectedCountryFrom,
      selectedCountryTo: this.selectedCountryTo,
      value: this.value,
    }
    console.log(obj)
    this.apiService.convertApi(obj).subscribe(
      response => {
        response=this.response;
      }
    )
  }
}


