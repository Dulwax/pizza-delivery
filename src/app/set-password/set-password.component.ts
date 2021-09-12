import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-set-password',
  templateUrl: './set-password.component.html',
  styleUrls: ['./set-password.component.scss']
})
export class SetPasswordComponent implements OnInit {
  
 
  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  linkTo(event:string){
    this.router.navigate(['/' + event]);
  }
}
