import { Component, Input, OnInit,Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

 

  @Input() public normalText:string = 'Already a user?';
  @Input() public link:string = 'sign-in';
  @Input() public linkText:string = 'Please sign in';


  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  open(value: string) {
    const newLink = value != '' ? value : this.link;
    this.router.navigate(['/' + value]);
  }


}
