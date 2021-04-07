import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormGroup, FormsModule, ReactiveFormsModule} from "@angular/forms";
import { PostFormComponent } from './post-form/post-form.component';
import { PostComponent } from './post/post.component';
import { CommonModule } from '@angular/common';
import {StyleDirectives} from "./directives/style.directives";
import { IfnotDirective } from './directives/ifnot.directive';
import {MultByPipe} from "./pipes/mult-by.pipe";
import { ExMarksPipe } from './pipes/ex-marks.pipe';
import { FilterPipe } from './pipes/filter.pipe';
import {AppCounterServices} from "./services/app-counter.services";
import { CounterComponent } from './counter/counter.component';
import { NewFormComponent } from './new-form/new-form.component';
import { FormGroupComponent } from './form-group/form-group.component';
import { ValidationComponent } from './validation/validation.component';


@NgModule({
  declarations: [
    AppComponent,
    PostFormComponent,
    PostComponent,
    StyleDirectives,
    IfnotDirective,
    MultByPipe,
    ExMarksPipe,
    FilterPipe,
    CounterComponent,
    NewFormComponent,
    FormGroupComponent,
    ValidationComponent,
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [
    AppCounterServices
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

