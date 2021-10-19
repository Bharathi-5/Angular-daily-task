import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MathsService } from '../services/maths.service';

@Component({
  selector: 'app-reactive',
  templateUrl: './reactive.component.html',
  styleUrls: ['./reactive.component.css'],
  providers: [MathsService]
})
export class ReactiveComponent implements OnInit {

  userform: any;

  country_list = [
    { "country_name": "India" },
    { "country_name": "Germany" },
    { "country_name": "London" },
    { "country_name": "United states of America" },
    { "country_name": "Paris" }
  ]

  constructor(public _maths: MathsService) { }

  ngOnInit(): void {
    this.userform = new FormGroup({
      "First_Name": new FormControl(null,Validators.required),
      "Last_Name": new FormControl(null),
      "Email_Id": new FormControl(null,[Validators.required,Validators.email]),
      "Mobile_Number": new FormControl(null),
      "Gender": new FormControl('Female'),
      "address": new FormGroup({
        "city": new FormControl(null),
        "state": new FormControl(null),
        "country": new FormControl(null),
        "pincode": new FormControl(null)
      }),
    });


  this.userform.setValue({
    First_Name: 'Ilakkiya',
    Last_Name: 'Ravindran',
    Email_Id: 'ilakkiyaravindran@gmail.com',
    Mobile_Number: '9994564400',
    Gender: 'Female',
    address: {
      city: 'Tuticorin',
      state: 'Tamilnadu',
      country: 'India',
      pincode: '628001'
    }
  });

  this.userform.patchValue({
    First_Name: 'Bharathi Priya'
  });
}

  onsubmit(){
    console.log(this.userform);
    this.userform.reset();
  }

  increase(){
    this._maths.addone();
  }

}
