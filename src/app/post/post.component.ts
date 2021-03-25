import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  DoCheck,
  EventEmitter,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  Output,
  SimpleChanges,
  ViewEncapsulation
} from '@angular/core';
import {Post} from "../app.component";

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None
})
export class PostComponent implements
  OnInit,
  OnChanges,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy
{

  @Input() post?: Post;
  @Output() onRemove = new EventEmitter<number>()

  ngOnChanges(changes: SimpleChanges) {
    console.log('ngOnChanges',changes)
  }

  constructor() {
    console.log('constructor')
  }

  ngOnInit(): void {
    console.log('ngOnInit')
  }

  ngDoCheck() {
    console.log('ngDoCheck')
  }
  ngAfterContentInit() {
    console.log('AfterContentInit')
  }
  ngAfterContentChecked() {
    console.log('ngAfterContentChecked')
  }
  ngAfterViewInit() {
    console.log('ngAfterViewInit')
  }
  ngAfterViewChecked() {
    console.log('ngAfterViewChecked')
  }
  ngOnDestroy() {
    console.log('ngOnDestroy')
  }
  removePost() {
  // @ts-ignore
    this.onRemove.emit(this.post.id)
  }
}
// interface test {
//   name: string;
//   surname: string;
//   getFullName(): string;
// }
// let obj:test = {
//   name: "Philip",
//   surname: "Bandurko",
//   getFullName() {return this.name+this.surname}
// }
// obj.getFullName()
//
// function getName(param:test):string {
//   console.log(param.getFullName());
//   return param.name;
// }
// getName(obj)
