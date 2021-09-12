import { Component, Input, OnInit,Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

 

  @Input() public normalText:string = 'Already a user?';
  @Input() public link:string = 'sign-in';
  @Input() public linkText:string = 'Please sign in';

  @Output() linkTo = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  linkToScreen(value: string) {
    const newLink = value != null ? value : this.link;
    this.linkTo.emit(newLink);
  }


}
