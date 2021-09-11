import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-set-password',
  templateUrl: './set-password.component.html',
  styleUrls: ['./set-password.component.scss']
})
export class SetPasswordComponent implements OnInit {
  
  headingMain:string = 'Your dinner';
  headingSub:string = 'awaits'
  
  constructor() { }

  ngOnInit(): void {
  }

}
