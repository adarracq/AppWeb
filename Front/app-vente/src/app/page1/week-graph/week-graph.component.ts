import { Component, OnInit } from '@angular/core';
import Chart from 'chart.js';

import { WeekGraphService } from 'src/app/services/page1/week-graph-service';


@Component({
  selector: 'app-week-graph',
  templateUrl: './week-graph.component.html',
  styleUrls: ['./week-graph.component.css']
})


export class WeekGraphComponent implements OnInit {

  barCanvas;

  constructor(private weekGraphCaService: WeekGraphService) {

  }

  updateGraphique(){
    this.weekGraphCaService.updateGraph();
    this.barCanvas = new Chart(document.getElementById("week-graph"), this.weekGraphCaService.GetGraph());
  }


  ngOnInit() {
    this.barCanvas = new Chart(document.getElementById("week-graph"), this.weekGraphCaService.GetGraph());
  }

}
