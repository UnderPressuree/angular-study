import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'hello world,im glad to see u all';
  count = 1;
  private lol = true;
  ngOnInit() {
    this.title = 'Hello btch';
    let maza = 123;
    maza = 256;
  }
  test() {
    console.log('Hello');
  }
  incrementCount() {
    this.count++;
    this.lol = false;
  }
  test2() {
    if(this.lol) {
      this.title = 'Bye bitch';
      this.lol = false;
    }
    this.count--;
  }
}
