import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {
  
  headingMain:string = 'A step closer';
  headingSub:string = 'to dining in'
  
  constructor() { }
  
  ngOnInit(): void {
  }
  
}
