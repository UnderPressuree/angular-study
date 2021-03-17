import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'hello world,im glad to see u all';
  count = 1;
  private lol = true;
  dynamicImage = 'https://angular.kr/assets/images/logos/angular/angular.png';
  inputText = ''
  backgroundSwitch = false
  catchme = false
  obj = [
    {title1: 'post 1', author: 'Philip', comments: [
        {name: 'Alex', text: 'lorem1'},
        {name: 'Alex', text: 'lorem2'},
        {name: 'Alex', text: 'lorem3'},
      ]},
    {title1: 'post 1', author: 'Philip', comments: [
        {name: 'Alex', text: 'lorem1'},
        {name: 'Alex', text: 'lorem2'},
        {name: 'Alex', text: 'lorem3'},
      ]}
  ]
  now: Date = new Date()
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
  constructor() {
    setTimeout( () => {
      console.log('Timeout is over')
      this.dynamicImage = 'https://user-images.githubusercontent.com/5693916/30366646-10dc3b30-986c-11e7-871a-4f5c237b9a6f.png'
    },5000)
  };
  onInput(event:any) {
    this.inputText = event.target.value
  }
}

