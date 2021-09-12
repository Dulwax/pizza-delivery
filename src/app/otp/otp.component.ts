import { Component, Input, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-otp',
  templateUrl: './otp.component.html',
  styleUrls: ['./otp.component.scss']
})
export class OtpComponent implements OnInit {
  
  headingMain:string = 'Get it while';
  headingSub:string = "it's hot";
  

  config = {
    allowNumbersOnly: true,
    length: 5,
    isPasswordInput: false,
    disableAutoFocus: false,
    placeholder: '',
    inputStyles: {
      'width': '53px',
      'height': '44px',
      'border': 'solid 1px #F7D0D1',
      'font-size': '20px',
      'border-radius': '5px'
    },
    containerClass:'wrappers'
  };
  
  
  
  constructor() { }
  
  ngOnInit(): void {
  }
  
}
