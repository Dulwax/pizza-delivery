import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-opt-forgot',
  templateUrl: './opt-forgot.component.html',
  styleUrls: ['./opt-forgot.component.scss']
})
export class OptForgotComponent implements OnInit {

  constructor(private router:Router) { }

  

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

  ngOnInit(): void {
  }

  linkTo(event:string){
    this.router.navigate(['/' + event]);
  }

}
