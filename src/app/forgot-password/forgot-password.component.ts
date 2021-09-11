import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent implements OnInit {

  headingMain:string = 'Your lunch';
  headingSub:string = 'awaits'

  constructor() { }

  ngOnInit(): void {
  }

}
