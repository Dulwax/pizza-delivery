import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-otp',
  templateUrl: './otp.component.html',
  styleUrls: ['./otp.component.scss']
})
export class OtpComponent implements OnInit {
  
  

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
      'border-radius': '5px',
      'filter': 'drop-shadow(5px 5px 4px rgba(0,0,0,.23))'
    },
    containerClass:'wrappers'
  };
  
  
  
  constructor(private router:Router) { }
  
  ngOnInit(): void {
  }
  
  linkTo(event:string){
    this.router.navigate(['/' + event]);
  }
}
