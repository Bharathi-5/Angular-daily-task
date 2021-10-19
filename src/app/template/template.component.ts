import { Component, OnInit,ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.css']
})
export class TemplateComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @ViewChild('userform') uf: any;

  country_list = [
    { "country_name": "India" },
    { "country_name": "Germany" },
    { "country_name": "London" },
    { "country_name": "United states of America" },
    { "country_name": "Paris" }
  ]

  setDefaultValue(){
    this.uf.setValue({
      First_Name: "Diya",
      Last_Name: "Reddy",
      Email_Id: "diyareddy@gmail.com",
      Mobile_Number: "9965360412",
      Gender: "Female",
      address: {
        city: "Vijayawada",
        state: "Hyderabad",
        country: "India",
        pincode: "625891"
      }
    });
  }

  onsubmit(){
    console.log("Submitted...!");
    console.log(this.uf);
    this.uf.reset();
  }


}
