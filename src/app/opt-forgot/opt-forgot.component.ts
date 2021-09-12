import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-opt-forgot',
  templateUrl: './opt-forgot.component.html',
  styleUrls: ['./opt-forgot.component.scss']
})
export class OptForgotComponent implements OnInit {

  constructor() { }

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

  ngOnInit(): void {
  }

}
