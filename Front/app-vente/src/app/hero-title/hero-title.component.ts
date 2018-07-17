import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-hero-title',
  templateUrl: './hero-title.component.html',
  styleUrls: ['./hero-title.component.css']
})
export class HeroTitleComponent implements OnInit {

  lastUpdate = new Date();
  @Input() title: string;
  constructor() { }

  ngOnInit() {
  }

}
