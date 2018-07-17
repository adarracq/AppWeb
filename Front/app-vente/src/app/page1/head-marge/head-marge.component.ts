import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-head-marge',
  templateUrl: './head-marge.component.html',
  styleUrls: ['./head-marge.component.css']
})
export class HeadMargeComponent implements OnInit {

  weekObjective = 16000;
  caFulfilled   = 11000;

  constructor() { }

  ngOnInit() {
  }

}
