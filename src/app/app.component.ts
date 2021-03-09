import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name = 'Binding data in Angular';

  str1 = "initval";

  ngAfterViewInit() {

  }
  change(val) {
    console.log(val)
    this.str1 = val;
  }
}
