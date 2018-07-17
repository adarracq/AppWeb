import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeadCaComponent } from './page1/head-ca/head-ca.component';
import { HeroTitleComponent } from './hero-title/hero-title.component';
import { Page1Component } from './page1/page1.component';
import { HeadMargeComponent } from './page1/head-marge/head-marge.component';
import { WeekGraphComponent } from './page1/week-graph/week-graph.component';

import { WeekGraphService } from 'src/app/services/page1/week-graph-service';

@NgModule({
  declarations: [
    AppComponent,
    HeadCaComponent,
    HeroTitleComponent,
    Page1Component,
    HeadMargeComponent,
    WeekGraphComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    WeekGraphService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
