import {Component, Injectable, OnInit} from '@angular/core';
import {AppCounterServices} from "./services/app-counter.services";
import {LocalCounterService} from "./services/local-counter.service";

export interface Post {
  title: string
  text: string
  id?: number
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [LocalCounterService]
})

// export class AppComponent implements OnInit {
//   title = 'hello world,im glad to see u all';
//   count = 1;
//   private lol = true;
//   dynamicImage = 'https://angular.kr/assets/images/logos/angular/angular.png';
//   inputText = ''
//   backgroundSwitch = false
//   catchme = false
//   obj = [
//     {title1: 'post 1', author: 'Philip', comments: [
//         {name: 'Alex', text: 'lorem1'},
//         {name: 'Alex', text: 'lorem2'},
//         {name: 'Alex', text: 'lorem3'},
//       ]},
//     {title1: 'post 1', author: 'Philip', comments: [
//         {name: 'Alex', text: 'lorem1'},
//         {name: 'Alex', text: 'lorem2'},
//         {name: 'Alex', text: 'lorem3'},
//       ]}
//   ]
//   now: Date = new Date()
//   ngOnInit() {
//     this.title = 'Hello btch';
//     let maza = 123;
//     maza = 256;
//   }
//   test() {
//     console.log('Hello');
//   }
//   public incrementCount():void {
//     this.count++;
//     this.lol = false;
//   }
//   test2() {
//     if(this.lol) {
//       this.title = 'Bye bitch';
//       this.lol = false;
//     }
//     this.count--;
//   }
//   constructor() {
//     setTimeout( () => {
//       console.log('Timeout is over')
//       this.dynamicImage = 'https://user-images.githubusercontent.com/5693916/30366646-10dc3b30-986c-11e7-871a-4f5c237b9a6f.png'
//     },5000)
//   };
//   onInput(event:any) {
//     this.inputText = event.target.value
//   }
// }
//
export class AppComponent implements OnInit {

  posts: Post[] = [
    {title: 'Want to learn Angular', text: 'still want to learn', id: 1},
    {title: 'Next block', text: 'About directives and pipes', id: 2}
  ]

  ngOnInit() {
    setTimeout(() => {
      console.log('TimeOut')
      this.posts[0] = {
        title: 'changed',
        text: 'changed too',
        id: 4
      }
    }, 5000)
  }

  updatePosts(post: Post) {
    this.posts.unshift(post)
    // console.log('Post',post)
  }

  removePost(id: number) {
    console.log('id to remove', id)
    this.posts = this.posts.filter(p => p.id != id)
  }

  isVisible = true;

  e: number = Math.E

  date: Date = new Date()

  sportPost: Post[] = [
    {title: 'Football', text: 'Best game in the world'},
    {title: 'Hockey', text: 'Worst game in the world'}
  ]

  search = ''
  searchField = 'title'

  addNewPost() {
    this.sportPost.unshift({
      title: 'Angular 8',
      text: 'learn'
    })
  }


  constructor(public appCounterServices: AppCounterServices,
              public localCounterService: LocalCounterService) {
  }
}
