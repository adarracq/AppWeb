import { Component, OnInit } from '@angular/core';
import Chart from 'chart.js';

export class WeekGraphService {

  constructor() {
    this.graph = {
        type: 'bar',
        data: {
          labels: ["Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi"],
          datasets: [{
            label: 'Objectif',
            data: [10, 10, 10, 10, 10, 10],
            backgroundColor: [
              'rgba(54, 162, 235, 0.6)',
              'rgba(54, 162, 235, 0.6)',
              'rgba(54, 162, 235, 0.6)',
              'rgba(54, 162, 235, 0.6)', 
              'rgba(54, 162, 235, 0.6)',
              'rgba(54, 162, 235, 0.6)'
            ]
          },
          {
            label: 'Réalisé',
            data: [0, 12, 0, 0, 0, 0],
            backgroundColor: [
              'rgba(54, 235, 54, 0.6)',
              'rgba(54, 235, 54, 0.6)',
              'rgba(54, 235, 54, 0.6)',
              'rgba(54, 235, 54, 0.6)',
              'rgba(54, 235, 54, 0.6)',
              'rgba(54, 235, 54, 0.6)'
            ]
          }
        ]},
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero:true
                    }
                }]
            }
        }
      };
  }

  updateGraph(){
    this.graph.data.datasets[0].data[2]=28;
  }

  GetGraph() {
    return this.graph;
  }
}
