import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-head-ca',
  templateUrl: './head-ca.component.html',
  styleUrls: ['./head-ca.component.css']
})
export class HeadCaComponent implements OnInit {

  weekObjective = 70000;
  caFulfilled   = 42000;

  constructor() { }

  ngOnInit() {
  }

}
