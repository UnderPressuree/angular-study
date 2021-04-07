import { Component, OnInit } from '@angular/core';
import {AppCounterServices} from "../services/app-counter.services";

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss']
})
export class CounterComponent {

  constructor(public appCounterService: AppCounterServices) { }

  ngOnInit(): void {
  }

}
