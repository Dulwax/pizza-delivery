import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  headingMain:string = 'Imagine that';
  headingSub:string = 'first bite'

  constructor() { }

  ngOnInit(): void {
  }

}
