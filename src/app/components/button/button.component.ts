import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {

  @Input() btnStyle:string= '';
  @Input() link:string = '';
  @Input() title:string = '';
  @Input() btnExtra:string = '';
  

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  open(event:string){
    this.router.navigate(['/' + event]);
  }

}
